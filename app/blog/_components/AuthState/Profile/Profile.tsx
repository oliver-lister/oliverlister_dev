"use client";

import Button from "@/components/Button";
import { User } from "@supabase/supabase-js";
import { IconDashboard } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  return (
    <>
      <button ref={setReferenceElement} onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={user.user_metadata.avatar_url}
          alt={user.user_metadata.user_name}
          width={50}
          height={50}
          className="rounded-full border-2 border-primary dark:border-secondary hover:border-accent"
        />
      </button>
      {isOpen
        ? createPortal(
            <div
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className="space-y-3 p-4 rounded-md text-sm bg-zinc-200 text-primary "
            >
              <div className="px-4">
                <p className="font-semibold">{user.user_metadata.user_name}</p>
                <p className="text-primary-700">{user.user_metadata.email}</p>
              </div>
              <div>
                <Button
                  href="/blog/dashboard"
                  variant="ghost"
                  className="block w-full"
                >
                  <IconDashboard />
                  Dashboard
                </Button>
              </div>
              <div>hi</div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Profile;
