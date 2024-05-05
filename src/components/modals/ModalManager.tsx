"use client";

import { useModal } from "@/context/ModalContext";
import ContactModal from "@/components/modals/ContactModal/ContactModal";
import { ReactElement, ReactNode, useEffect } from "react";

type ModalComponents = {
  [key: string]: (props: {
    handleClose: (e: React.MouseEvent) => void;
    closeModal: () => void;
  }) => ReactElement;
};

const modalLookup: ModalComponents = {
  contact: ContactModal,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  const handleClose = (e: React.MouseEvent) => {
    const targetId = (e.target as HTMLElement).id;
    if (targetId === "modal-wrapper" || targetId === "modal-exit") {
      closeModal();
    }
  };

  if (!modal) return null; // if no Modal is open currently, show nothing.

  const Modal = modalLookup[modal];
  return <Modal handleClose={handleClose} closeModal={closeModal} />;
};
export default ModalManager;
