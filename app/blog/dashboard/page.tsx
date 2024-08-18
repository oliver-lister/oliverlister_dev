import Button from "@/components/Button/Button";
import { IconPlus } from "@tabler/icons-react";
import BlogTable from "./_components/BlogTable";

const Dashboard = async () => {
  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Blog Posts</h2>
        <Button variant="accent" href="/blog/dashboard/create">
          Create <IconPlus />
        </Button>
      </div>
      <div>
        <BlogTable />
      </div>
    </div>
  );
};

export default Dashboard;
