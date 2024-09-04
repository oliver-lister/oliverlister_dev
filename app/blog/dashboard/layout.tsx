import React from "react";
import { createClient } from "@/libs/utils/supabase/server";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.user_metadata.role !== "admin") {
    return redirect("/login");
  }
  return <div className="grid gap-5">{children}</div>;
};

export default layout;
