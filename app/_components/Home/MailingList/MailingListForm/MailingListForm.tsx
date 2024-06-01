"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import Button from "@/components/Button";

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
};

const MailingListForm: React.FC<MailingListFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailingListFormData>({
    resolver: yupResolver(schema),
  });

  const inputStyle = errors.email
    ? "border-2 border-red-600 focus:border-red-600 py-2 px-3 w-full max-w-[40vw] text-xs rounded-l-lg bg-secondary-900 text-primary | dark:bg-primary-900"
    : "border-2 py-2 px-3 text-xs w-full max-w-[40vw] rounded-l-lg border-primary bg-secondary-900 text-primary | dark:border-secondary dark:bg-primary-900";

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
            variant="primary"
            className="text-xs rounded-none rounded-r-lg"
          >
            Submit
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
