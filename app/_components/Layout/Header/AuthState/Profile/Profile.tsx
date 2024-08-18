import Popover from "@/components/Popover";
import { createClient } from "@/libs/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Button from "@/components/Button/Button";
import Image from "next/image";
import React, { useState } from "react";
import { IconLayoutDashboard, IconLogout } from "@tabler/icons-react";

type ProfileProps = {
  user: User;
  setUser: (user: User | undefined) => void;
};

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(undefined);
  };

  const isAdmin = (user.user_metadata.role = "admin");

  const arrow = (
    <div
      id="arrow"
      className="relative invisible select-none"
      data-popper-arrow
    >
      <div className="absolute w-2 h-2 bg-zinc-200 visible transform rotate-45 top-[-4px] right-[20px]"></div>
    </div>
  );

  const popup = (
    <>
      {arrow}
      <div className="divide-y divide-primary-900 p-4 rounded-md text-sm bg-zinc-200 text-primary">
        <div className="px-4 mb-2">
          <p className="font-semibold">{user.user_metadata.user_name}</p>
          <p className="text-primary-700">{user.user_metadata.email}</p>
        </div>
        {isAdmin ? (
          <Button
            href="/blog/dashboard"
            variant="ghost"
            className="block w-full justify-between"
          >
            Dashboard
            <IconLayoutDashboard size={18} />
          </Button>
        ) : null}
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="block w-full justify-between"
        >
          Logout
          <IconLogout size={18} />
        </Button>
      </div>
    </>
  );

  return (
    <>
      <Popover content={popup}>
        <Image
          src={user.user_metadata.avatar_url}
          alt={user.user_metadata.user_name}
          width={50}
          height={50}
          className="rounded-full border-2 border-primary dark:border-secondary hover:border-accent dark:hover:border-accent cursor-pointer"
        />
      </Popover>
    </>
  );
};

export default Profile;
