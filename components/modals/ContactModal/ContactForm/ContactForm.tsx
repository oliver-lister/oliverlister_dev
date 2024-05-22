"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Button from "../../../Button";
import FormField from "./FormField";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  mailingList: boolean;
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
  mailingList: yup.boolean().required("mailingList is a required field"),
});

type ContactFormProps = {
  onSubmit: SubmitHandler<ContactFormData>;
  isLoading: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  // set focus on component mount
  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const inputStyle = (fieldName: "name" | "email" | "message") =>
    errors[fieldName]
      ? "border-2 border-red-600 focus:border-red-600 py-2 px-3 text-md rounded-lg bg-secondary-900 text-primary | dark:bg-primary-900"
      : "border-2 py-2 px-3 text-md rounded-lg border-primary bg-secondary-900 text-primary | dark:border-secondary dark:bg-primary-900";

  return (
    <>
      <h3 className="text-sm opacity-80">
        Please reach out, I&apos;d love to hear from you!
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        className="grid gap-2 mt-4"
      >
        <FormField
          label="Name"
          htmlFor="name"
          errorMessage={errors.name && errors.name.message}
        >
          <input
            {...register("name")}
            id="name"
            type="text"
            name="name"
            aria-invalid={errors.name ? "true" : "false"}
            autoComplete="true"
            className={inputStyle("name")}
          />
        </FormField>
        <FormField
          label="Email"
          htmlFor="email"
          errorMessage={errors.email && errors.email.message}
        >
          <input
            {...register("email")}
            id="email"
            type="text"
            name="email"
            aria-invalid={errors.email ? "true" : "false"}
            autoComplete="true"
            className={inputStyle("email")}
          />
        </FormField>
        <FormField
          label="Message"
          htmlFor="message"
          errorMessage={errors.message && errors.message.message}
        >
          <textarea
            {...register("message")}
            id="message"
            name="message"
            aria-invalid={errors.message ? "true" : "false"}
            rows={10}
            autoComplete="false"
            className={inputStyle("message")}
          />
        </FormField>
        <FormField
          label="Would you like to join my mailing list?"
          htmlFor="mailingList"
          errorMessage={errors.mailingList && errors.mailingList.message}
          checkbox={true}
        >
          <input
            {...register("mailingList")}
            type="checkbox"
            id="mailingList"
            className="w-8"
          />
        </FormField>
        <Button
          variant="primary"
          type="submit"
          className="disabled:pointer-events-none mt-4 dark:bg-salmon-300"
          disabled={!!Object.keys(errors).length || isLoading}
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
    </>
  );
};

export default ContactForm;
