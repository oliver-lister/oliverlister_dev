"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { z } from "zod";

// yup schema
const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.any(),
  description: z.string().min(1, "Description is required"),
  isPublished: z.boolean(),
  isPremium: z.boolean(),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;

type CreateFormProps = {
  onSubmit: SubmitHandler<CreatePostFormData>;
  isLoading: boolean;
};

const CreateForm: React.FC<CreateFormProps> = ({ onSubmit, isLoading }) => {
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreatePostFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      description: "",
      image: undefined,
      isPublished: false,
      isPremium: false,
    },
  });

  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        className={`${isPreview ? "hidden lg:grid" : ""} grid gap-2 mt-4`}
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
          label="Post Title"
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
          label="Description"
          htmlFor="description"
          errorMessage={errors.description && errors.description.message}
        >
          <Input
            id="description"
            rows={10}
            isError={errors.description}
            reactHookFormProps={register("description")}
          />
        </FormField>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        ></input>
      </form>
      <div className="lg:block hidden">
        <p>{watch().title}</p>
      </div>
    </div>
  );
};

export default CreateForm;
