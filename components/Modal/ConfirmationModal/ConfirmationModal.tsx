import Button from "@/components/Button/Button";
import Modal from "../Modal";
import { IconTrash } from "@tabler/icons-react";

const ConfirmationModal = ({
  closeModal,
  func,
}: {
  closeModal: () => void;
  func: (() => void) | undefined;
}) => {
  const handleDelete = () => {
    if (func) func();
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="pr-12">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold">Are you sure?</h2>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Button variant="outline" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <IconTrash />
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
