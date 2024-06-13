"use client";

import { useUser } from "@/libs/store/user";
import { createClient } from "@/libs/utils/supabase/client";
import React, { useEffect } from "react";

const SessionProvider = () => {
  const setUser = useUser((state) => state.setUser);
  const readUserSession = async () => {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };
  useEffect(() => {
    readUserSession();
  }, []);
  return <></>;
};

export default SessionProvider;
