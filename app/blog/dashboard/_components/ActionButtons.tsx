import Button from "@/components/Button/Button";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" className="text-sm">
        <IconEye size={20} />
        View
      </Button>
      <Button variant="outline" className="text-sm">
        <IconEdit size={20} />
        Edit
      </Button>
      <Button variant="outline" className="text-sm">
        <IconTrash size={20} />
        Delete
      </Button>
    </div>
  );
};

export default ActionButtons;
