"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import Button from "@/components/Button/Button";
import { IconLoader2 } from "@tabler/icons-react";
import Input from "@/components/Input/Input";

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

const defaultInputStyle = "text-xs rounded-r-none rounded-l-lg";

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
      : ""
  }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="mailing-list">
      <div className="grid gap-1">
        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <div className="flex">
          <Input
            id="email"
            type="text"
            isError={errors.email}
            className={inputStyle}
            reactHookFormProps={register("email")}
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
