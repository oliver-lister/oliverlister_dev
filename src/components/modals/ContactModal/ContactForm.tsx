"use client";

import { useForm } from "react-hook-form";
import {
  useForm as useFormspree,
  ValidationError as ServerError,
} from "@formspree/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { IconCheck, IconLoader2 } from "@tabler/icons-react";
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

function mergeErrors(formspreeErrors, otherErrors = {}) {
  // merge server side errors into react-hook-form errors
  return {
    ...formspreeErrors.reduce(
      (acc, cur) => ({
        [cur.field || "form"]: {
          message: (cur.field ? "This " : "") + cur.message,
        },
        ...acc,
      }),
      {}
    ),
    ...otherErrors,
  };
}

export default function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree("xgegbwdo");
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  // set focus on component mount
  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  if (serverState.succeeded) {
    return (
      <div className="grid items-center h-full">
        <div className="text-center grid place-items-center gap-2">
          <IconCheck
            size={75}
            className="bg-primary text-secondary rounded-full p-2 | dark:bg-secondary dark:text-primary"
          />
          <p className="font-bold">Sent! I&apos;ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  const inputStyle = (fieldName: "name" | "email" | "message") =>
    errors[fieldName]
      ? "border-2 border-red-600 focus:border-red-600 py-2 px-3 text-md rounded-lg bg-secondary-900 text-primary | dark:bg-primary-900"
      : "border-2 py-2 px-3 text-md rounded-lg border-primary bg-secondary-900 text-primary | dark:border-secondary dark:bg-primary-900";

  return (
    <form
      onSubmit={handleSubmit(sendToFormspree)}
      name="contact"
      className="grid gap-2 mt-4"
    >
      {/* {serverState.errors?.getFormErrors.message} */}
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
        variant="primary"
        type="submit"
        className="disabled:pointer-events-none dark:bg-salmon-300"
        disabled={!!Object.keys(errors).length || serverState.submitting}
      >
        {serverState.submitting ? (
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
