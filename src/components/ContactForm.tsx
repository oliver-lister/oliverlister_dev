"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  email: string;
  message: string;
};

// yup schema
const schema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is a required field"),
  message: yup
    .string()
    .required("Message is a required field")
    .min(25, "Please enter at least 25 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  const labelStyle = (fieldName: "name" | "email" | "message") =>
    watch(fieldName)
      ? "absolute cursor-text text-sm bg-secondary px-[1px] transition-all text-primary -top-[9px] left-3"
      : "absolute cursor-text text-md peer-focus:bg-secondary px-[1px] transition-all text-gray-600 peer-focus:text-primary peer-focus:text-sm top-2 left-2 peer-focus:-top-[9px] peer-focus:left-3";

  const inputStyle = (fieldName: "name" | "email" | "message") =>
    errors[fieldName]
      ? "border-2 border-red-600 focus:border-red-600 py-2 px-3 text-md rounded-lg bg-secondary peer"
      : "border-2 border-primary py-2 px-3 text-md rounded-lg bg-secondary peer";

  const errorStyle: string =
    "text-xs italic text-red-600 w-full h-4 caret-transparent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
      <div className="grid gap-1 relative">
        <input
          {...register("name")}
          id="name"
          aria-invalid={errors.name ? "true" : "false"}
          autoComplete="true"
          className={inputStyle("name")}
        />
        <label htmlFor="name" className={labelStyle("name")}>
          Name
        </label>
        <p className={errorStyle}>{errors.name?.message}</p>
      </div>
      <div className="grid gap-1 relative">
        <input
          {...register("email")}
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete="true"
          className={inputStyle("email")}
        />
        <label htmlFor="email" className={labelStyle("email")}>
          Email
        </label>
        <p className={errorStyle}>{errors.email?.message}</p>
      </div>
      <div className="grid gap-1 relative">
        <textarea
          {...register("message")}
          id="message"
          aria-invalid={errors.message ? "true" : "false"}
          rows={10}
          autoComplete="false"
          className={inputStyle("message")}
        />
        <label htmlFor="message" className={labelStyle("message")}>
          Message
        </label>
        <p className={errorStyle}>{errors.message?.message}</p>
      </div>
      <button
        type="submit"
        className="border-2 border-primary rounded-lg p-2 bg-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
