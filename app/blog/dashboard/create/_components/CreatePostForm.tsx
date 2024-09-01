"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2, IconDeviceFloppy } from "@tabler/icons-react";
import Button from "@/components/Button/Button";
import FormField from "@/components/FormField/FormField";
import Input from "@/components/Input/Input";
import { z } from "zod";

// zod schema
export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.any(),
  description: z.string().min(1, "Description is required"),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;

type CreatePostFormProps = {
  onSubmit: SubmitHandler<CreatePostFormData>;
  isLoading: boolean;
};

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      description: "",
      image: undefined,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      className="grid gap-2 mt-4"
    >
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
        type="file"
        {...register("image")}
      ></input>
      <Button
        variant="accent"
        type="submit"
        className="disabled:cursor-not-allowed"
        disabled={!!Object.keys(errors).length}
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
    </form>
  );
};

export default CreatePostForm;
