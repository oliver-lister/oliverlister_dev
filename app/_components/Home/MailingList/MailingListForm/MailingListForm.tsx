"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import Button from "@/components/Button";
import { IconLoader2 } from "@tabler/icons-react";

export type MailingListFormData = {
  email: string;
};

// yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .trim()
    .required("Email is required"),
});

type MailingListFormProps = {
  onSubmit: SubmitHandler<MailingListFormData>;
  isLoading: boolean;
};

const defaultInputStyle =
  "border-2 py-2 px-3 text-xs w-full rounded-l-lg bg-zinc-100 text-primary border-accent dark:border-accent dark:text-secondary dark:bg-zinc-400 focus:outline-none focus:ring-0 ";

const MailingListForm: React.FC<MailingListFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailingListFormData>({
    resolver: yupResolver(schema),
  });

  const inputStyle = `${defaultInputStyle} ${
    errors.email
      ? "border-red-600 focus:border-red-600 dark:focus:border-red-600"
      : "focus:border-primary dark:focus:border-secondary"
  }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="mailing-list">
      <div className="grid gap-1">
        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <div className="flex">
          <input
            id="email"
            type="text"
            className={inputStyle}
            {...register("email")}
          />
          <Button
            type="submit"
            variant="accent"
            className="text-xs rounded-none rounded-r-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <IconLoader2 size={16} className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
        {errors.email && (
          <p className="text-red-400 text-xs">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default MailingListForm;
