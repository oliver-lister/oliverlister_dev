"use client";

import Button from "@/components/Button";
import { createClient } from "@/libs/utils/supabase/client";
import { IconBrandGithub } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

const LoginButton = () => {
  const pathname = usePathname();

  const handleLogin = () => {
    const supabase = createClient();
    console.log(location.origin);
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <Button onClick={handleLogin} variant="accent">
      <IconBrandGithub />
      Login with Github
    </Button>
  );
};

export default LoginButton;
