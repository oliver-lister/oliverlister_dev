"use client";

import { useModal } from "../../context/ModalContext";
import ContactModal from "./ContactModal/ContactModal";
import { ReactElement } from "react";

type ModalComponents = {
  [key: string]: (props: { closeModal: () => void }) => ReactElement;
};

const modalLookup: ModalComponents = {
  contact: ContactModal,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null; // if no Modal is open currently, show nothing.

  const Modal = modalLookup[modal];
  return <Modal closeModal={closeModal} />;
};
export default ModalManager;
