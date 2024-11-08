"use client";

import { IconEye, IconMenu, IconTrash, IconX } from "@tabler/icons-react";
import Button from "@/components/Button/Button";
import Popover from "@/components/Popover";
import { useState } from "react";
import { deletePost } from "@/server/actions/post.actions";
import { useModal } from "@/context/ModalContext";

type ActionMenuProps = {
  id: number;
  slug: string;
};

const ActionMenu: React.FC<ActionMenuProps> = ({ id, slug }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { openModal } = useModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpen = () => {
    openModal("confirmation", () => handleDelete());
    toggleMenu();
  };

  const handleDelete = async () => {
    await deletePost({
      post_id: id,
    });

    console.log("Post deleted: " + slug);
  };

  const actionMenu = (
    <div className="divide-y divide-primary-900 p-2 text-sm bg-zinc-200 text-primary">
      <Button
        variant="ghost"
        className="w-full grid grid-cols-2 justify-start gap-0"
        href={`/blog/${slug}`}
        onClick={toggleMenu}
      >
        <IconEye size={15} />
        <span className="flex justify-start">View</span>
      </Button>
      <Button
        variant="ghost"
        className="w-full grid grid-cols-2 justify-start gap-0 text-red-500 hover:!bg-red-500 hover:text-secondary"
        onClick={() => handleOpen()}
      >
        <IconTrash size={15} />
        <span className="flex justify-start">Delete</span>
      </Button>
    </div>
  );

  return (
    <div className="justify-self-center">
      <Popover content={actionMenu}>
        <Button
          variant="outline"
          className={`${
            isMenuOpen
              ? "bg-primary dark:bg-secondary text-secondary dark:!text-primary"
              : ""
          } rounded-none`}
          onClick={toggleMenu}
          aria-label="Action menu"
        >
          {isMenuOpen ? <IconX size={15} /> : <IconMenu size={15} />}
        </Button>
      </Popover>
    </div>
  );
};

export default ActionMenu;
