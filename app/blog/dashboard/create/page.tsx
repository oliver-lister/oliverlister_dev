"use client";

import CreateForm, { CreatePostFormData } from "./_components/CreateForm";

const Create = () => {
  const handleSubmit = (values: CreatePostFormData) => {};

  return (
    <div>
      <CreateForm onSubmit={handleSubmit} isLoading={false} />
    </div>
  );
};

export default Create;
