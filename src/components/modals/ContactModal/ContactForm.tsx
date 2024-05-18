"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Button from "@/components/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

// yup schema
const schema = yup.object().shape({
  name: yup.string().trim().required("Name is a required field"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is a required field"),
  message: yup
    .string()
    .trim()
    .required("Message is a required field")
    .min(25, "Please enter at least 25 characters"),
});

const labelStyle = "text-sm";
const errorStyle = "text-xs italic text-red-600 w-full h-4 caret-transparent";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  // set focus on component mount
  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const onSubmit = (data: FormData) => {
    setIsLoading((prevLoading) => !prevLoading);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        setIsLoading((prevLoading) => !prevLoading);
        reset();
        resolve();
      }, 2000);
    });
  };

  const inputStyle = (fieldName: "name" | "email" | "message") =>
    errors[fieldName]
      ? "border-2 border-red-600 focus:border-red-600 py-2 px-3 text-md rounded-lg bg-secondary-900 text-primary | dark:bg-primary-900"
      : "border-2 py-2 px-3 text-md rounded-lg border-primary bg-secondary-900 text-primary | dark:border-secondary dark:bg-primary-900";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      className="grid gap-2"
    >
      <div className="grid gap-1">
        <label htmlFor="name" className={labelStyle}>
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          name="name"
          aria-invalid={errors.name ? "true" : "false"}
          autoComplete="true"
          className={inputStyle("name")}
        />
        <p className={errorStyle}>{errors.name?.message}</p>
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className={labelStyle}>
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          name="email"
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete="true"
          className={inputStyle("email")}
        />
        <p className={errorStyle}>{errors.email?.message}</p>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className={labelStyle}>
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          name="message"
          aria-invalid={errors.message ? "true" : "false"}
          rows={10}
          autoComplete="false"
          className={inputStyle("message")}
        />
        <p className={errorStyle}>{errors.message?.message}</p>
      </div>
      <Button
        type="submit"
        className="disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer p-2 rounded-lg bg-accent border-2 border-primary dark:border-secondary hover:bg-accent/80"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <IconLoader2 size={20} className="animate-spin" />
            Processing
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
