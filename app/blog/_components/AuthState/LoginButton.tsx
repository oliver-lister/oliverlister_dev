"use client";

import Button from "@/components/Button";
import { createClient } from "@/libs/utils/supabase/client";
import { IconBrandGithub } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

const LoginButton = () => {
  const pathname = usePathname();

  const handleLoginWithGithub = () => {
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <Button onClick={handleLoginWithGithub} variant="accent">
      <IconBrandGithub />
      Login with Github
    </Button>
  );
};

export default LoginButton;
