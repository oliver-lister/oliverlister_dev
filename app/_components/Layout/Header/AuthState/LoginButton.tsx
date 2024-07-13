"use client";

import { createClient } from "@/libs/utils/supabase/client";
import { IconBrandGithub } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button/Button";

const LoginButton = () => {
  const pathname = usePathname();

  const handleLogin = () => {
    const supabase = createClient();
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
      Login
    </Button>
  );
};

export default LoginButton;
