"use client";

import React, { useState } from "react";
import Button from "../Button/Button";
import {
  IconChevronDown,
  IconEdit,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";

type DropdownProps = {
  children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={toggleIsOpen}
        className={`${
          isOpen ? "rounded-none rounded-t-md !bg-secondary !text-primary" : ""
        } w-full duration-200 transition-all`}
      >
        {children}
        <IconChevronDown
          size={15}
          className={`${isOpen ? "rotate-180" : ""} transition-all`}
        />
      </Button>
      {isOpen ? (
        <div className="animate-[appear_cubic-bezier(0.4,_0,_0.2,_1)_200ms_forwards] absolute w-full divide-y divide-primary-900 p-2 rounded-b-md text-sm bg-zinc-200 text-primary">
          <Button
            variant="ghost"
            className="w-full grid grid-cols-2 justify-start gap-0"
          >
            <IconEye size={15} />
            <span className="flex justify-start">View</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full grid grid-cols-2 justify-start gap-0"
          >
            <IconEdit size={15} />
            <span className="flex justify-start">Edit</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full grid grid-cols-2 justify-start gap-0 text-red-500 hover:bg-red-500 hover:text-secondary"
          >
            <IconTrash size={15} />
            <span className="flex justify-start">Delete</span>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
