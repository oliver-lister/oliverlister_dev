import Button from "@/components/Button/Button";
import { IconPlus, IconUser } from "@tabler/icons-react";
import BlogTable from "./_components/BlogTable";

const Dashboard = async () => {
  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Blog Posts</h2>
        <div className="flex gap-2">
          <Button variant="outline" href="/blog/dashboard/user">
            User <IconUser />
          </Button>
          <Button variant="accent" href="/blog/dashboard/create">
            Create Post <IconPlus />
          </Button>
        </div>
      </div>
      <div>
        <BlogTable />
      </div>
    </div>
  );
};

export default Dashboard;
