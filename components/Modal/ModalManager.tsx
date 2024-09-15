"use client";

import { useModal } from "../../context/ModalContext";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import ContactModal from "./ContactModal/ContactModal";
import { ReactElement } from "react";

type ModalComponents = {
  [key: string]: (props: {
    closeModal: () => void;
    func: (() => void) | undefined;
  }) => ReactElement;
};

const modalLookup: ModalComponents = {
  contact: ContactModal,
  confirmation: ConfirmationModal,
};

const ModalManager = () => {
  const { modal, closeModal, func } = useModal();

  if (!modal) return null; // if no Modal is open currently, show nothing.

  const Modal = modalLookup[modal];
  return <Modal closeModal={closeModal} func={func} />;
};
export default ModalManager;
