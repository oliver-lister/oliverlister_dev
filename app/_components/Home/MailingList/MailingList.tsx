"use client";

import React from "react";
import MailingListForm, {
  MailingListFormData,
} from "./MailingListForm/MailingListForm";

const MailingList: React.FC = () => {
  const onSubmit = (values: MailingListFormData) => {};

  return <MailingListForm onSubmit={onSubmit} />;
};

export default MailingList;
