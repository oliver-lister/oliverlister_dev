"use client";

import CreateForm from "./_components/CreateForm";

const Create = () => {
  return (
    <div>
      <CreateForm
        onSubmit={(values) => console.log(values)}
        isLoading={false}
      />
    </div>
  );
};

export default Create;
