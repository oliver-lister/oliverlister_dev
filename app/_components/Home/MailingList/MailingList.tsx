"use client";

import React, { useState } from "react";
import MailingListForm, {
  MailingListFormData,
} from "./MailingListForm/MailingListForm";

const MailingList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = async (values: MailingListFormData) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/addToMailingList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      setIsLoading(false);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error submitting form: ${err.message}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="md:col-span-1 grid gap-2">
      <div className="grid gap-1">
        <h2 className="font-bold text-md text-accent-700 dark:text-accent-500 uppercase">
          Join my mailing list
        </h2>
        <p className="text-xs">
          Recieve updates whenever I make a new blog post.
        </p>
      </div>
      <MailingListForm onSubmit={onSubmit} />
    </div>
  );
};

export default MailingList;
