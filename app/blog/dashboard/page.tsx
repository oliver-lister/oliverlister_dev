import { createClient } from "@/libs/utils/supabase/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.user_metadata.role !== "admin") {
    return redirect("/login");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
