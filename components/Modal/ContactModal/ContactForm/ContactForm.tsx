"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Button from "@/components/Button/Button";
import FormField from "./FormField";
import Input from "@/components/Input/Input";

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
          <Input
            id="name"
            type="text"
            isError={errors.name}
            reactHookFormProps={register("name")}
          />
        </FormField>
        <FormField
          label="Email"
          htmlFor="email"
          errorMessage={errors.email && errors.email.message}
        >
          <Input
            id="email"
            type="text"
            isError={errors.email}
            reactHookFormProps={register("email")}
          />
        </FormField>
        <FormField
          label="Message"
          htmlFor="message"
          errorMessage={errors.message && errors.message.message}
        >
          <Input
            id="message"
            rows={10}
            isError={errors.message}
            reactHookFormProps={register("message")}
          />
        </FormField>
        <div className="mt-2 flex justify-center">
          <FormField
            label="Would you like to join my mailing list?"
            htmlFor="mailingList"
            errorMessage={errors.mailingList && errors.mailingList.message}
            checkbox={true}
          >
            <Input
              type="checkbox"
              id="mailingList"
              isError={errors.mailingList}
              reactHookFormProps={register("mailingList")}
            />
          </FormField>
        </div>
        <Button
          variant="accent"
          type="submit"
          className="disabled:cursor-not-allowed mt-4"
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
