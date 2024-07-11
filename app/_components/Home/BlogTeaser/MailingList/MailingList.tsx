"use client";

import React, { useState } from "react";
import MailingListForm, {
  MailingListFormData,
} from "./MailingListForm/MailingListForm";
import { IconMail } from "@tabler/icons-react";
import MailingListFormSubmitted from "./MailingListForm/MailingListFormSubmitted";

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
    <div className="grid gap-2 shadow-md bg-zinc-200 dark:bg-zinc-600 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="grid gap-1">
          <div className="flex items-center gap-2 text-accent">
            <IconMail />
            <h2 className="font-bold text-md text-accent uppercase">
              Join my mailing list
            </h2>
          </div>
          <p className="text-xs">
            Recieve updates whenever I make a new blog post.
          </p>
        </div>
      </div>
      {submitted ? (
        <MailingListFormSubmitted />
      ) : (
        <MailingListForm onSubmit={onSubmit} isLoading={isLoading} />
      )}
    </div>
  );
};

export default MailingList;
