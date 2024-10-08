import Popover from "@/components/Popover";
import { createClient } from "@/libs/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Button from "@/components/Button/Button";
import Image from "next/image";
import React, { useState } from "react";
import { IconLayoutDashboard, IconLogout, IconUser } from "@tabler/icons-react";
import Avatar from "@/components/Avatar/Avatar";

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

  const popup = (
    <div className="divide-y divide-primary-900 p-4 rounded-md text-sm bg-zinc-200 text-primary">
      <div className="px-4 mb-2">
        <p className="font-semibold">{user.user_metadata.user_name}</p>
        <p className="text-primary-700">{user.user_metadata.email}</p>
      </div>
      {isAdmin ? (
        <>
          <Button
            href="/blog/dashboard"
            variant="ghost"
            className="block w-full justify-between"
          >
            Dashboard
            <IconLayoutDashboard size={18} />
          </Button>
          <Button
            href="/blog/dashboard/user"
            variant="ghost"
            className="block w-full justify-between"
          >
            User
            <IconUser size={18} />
          </Button>
        </>
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
  );

  return (
    <>
      <Popover content={popup} arrow={true}>
        <Avatar
          src={user.user_metadata.avatar_url}
          size={50}
          className="border-primary dark:border-secondary hover:border-accent dark:hover:border-accent cursor-pointer"
        />
      </Popover>
    </>
  );
};

export default Profile;
