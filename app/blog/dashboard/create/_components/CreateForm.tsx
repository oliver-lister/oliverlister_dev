"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconEye,
  IconLoader2,
  IconDeviceFloppy,
  IconPlaneDeparture,
  IconStar,
  IconEdit,
} from "@tabler/icons-react";
import Button from "@/components/Button/Button";
import FormField from "@/components/FormField/FormField";
import Input from "@/components/Input/Input";
import Switch from "@/components/Switch/Switch";
import { useState } from "react";

export type ContactFormData = {
  title: string;
  image_url: string;
  content: string;
  isPublished: boolean;
  isPremium: boolean;
};

// yup schema
const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title must be at least 2 characters in length")
    .trim()
    .required("Title is a required field"),
  image_url: yup
    .string()
    .url("Invalid url")
    .required("Image URL is a required field"),
  content: yup.string().required("Content is a required field"),
  isPublished: yup.bool().required(),
  isPremium: yup.bool().required(),
});

type ContactFormProps = {
  onSubmit: SubmitHandler<ContactFormData>;
  isLoading: boolean;
};

const CreateForm: React.FC<ContactFormProps> = ({ onSubmit, isLoading }) => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ContactFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      content: "",
      image_url: "",
      isPublished: false,
      isPremium: false,
    },
  });

  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        className="grid gap-2 mt-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <span
              role="button"
              tabIndex={0}
              className="flex items-center justify-center gap-2 border-2 py-2 px-3 rounded-lg select-none border-primary text-primary hover:text-secondary hover:bg-primary transition active:scale-95 | dark:text-secondary dark:bg-primary dark:border-secondary dark:hover:text-primary dark:hover:bg-secondary"
              onClick={() => setIsPreview(!isPreview)}
            >
              {isPreview ? (
                <>
                  <IconEdit /> Edit
                </>
              ) : (
                <>
                  <IconEye /> Preview
                </>
              )}
            </span>
            <div className="flex items-center">
              <label
                role="button"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg select-none text-primary | dark:text-secondary dark:bg-primary"
                htmlFor="switch-premium"
              >
                <IconStar />
                Premium
              </label>
              <Switch
                id="switch-premium"
                reactHookFormProps={register("isPremium")}
              />
            </div>
            <div className="flex items-center">
              <label
                role="button"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg select-none text-primary | dark:text-secondary dark:bg-primary"
                htmlFor="switch-publish"
              >
                <IconPlaneDeparture />
                Publish
              </label>
              <Switch
                id="switch-publish"
                reactHookFormProps={register("isPublished")}
              />
            </div>
          </div>
          <Button
            variant="accent"
            type="submit"
            className="disabled:cursor-not-allowed"
            disabled={!!Object.keys(errors).length || isLoading}
          >
            {isLoading ? (
              <>
                <IconLoader2 size={20} className="animate-spin" />
                Processing
              </>
            ) : (
              <>
                <IconDeviceFloppy />
                Save
              </>
            )}
          </Button>
        </div>
        <FormField
          label="Title"
          htmlFor="title"
          errorMessage={errors.title && errors.title.message}
        >
          <Input
            id="title"
            type="text"
            isError={errors.title}
            reactHookFormProps={register("title")}
          />
        </FormField>
        <FormField
          label="Image URL"
          htmlFor="image_url"
          errorMessage={errors.image_url && errors.image_url.message}
        >
          <Input
            id="image_url"
            type="text"
            isError={errors.image_url}
            reactHookFormProps={register("image_url")}
          />
        </FormField>
        <FormField
          label="Content"
          htmlFor="content"
          errorMessage={errors.content && errors.content.message}
        >
          <Input
            id="content"
            rows={10}
            isError={errors.content}
            reactHookFormProps={register("content")}
          />
        </FormField>
      </form>
      <div className="lg:block hidden">
        <p>{getValues().title}</p>
      </div>
    </div>
  );
};

export default CreateForm;
