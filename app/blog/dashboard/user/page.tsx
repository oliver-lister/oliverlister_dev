import Button from "@/components/Button/Button";
import { IconLayoutDashboard } from "@tabler/icons-react";
import React from "react";

const User = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">User</h2>
        <Button variant="accent" href="/blog/dashboard">
          Dashboard <IconLayoutDashboard />
        </Button>
      </div>
    </div>
  );
};

export default User;
