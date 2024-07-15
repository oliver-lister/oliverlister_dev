import Button from "@/components/Button/Button";
import { IconPlus } from "@tabler/icons-react";

const Dashboard = async () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Blog Posts</h2>
        <Button variant="accent">
          Create <IconPlus />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
