"use client";

import { User } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";

type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Image
      src={user.user_metadata.avatar_url}
      alt={user.user_metadata.username}
      width={50}
      height={50}
      className="rounded-full border-2 border-secondary"
    />
  );
};

export default Profile;
