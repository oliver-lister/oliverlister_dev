"use client";

import useScroll from "../hooks/useScroll";
import React, { createContext, useContext, useEffect, useState } from "react";

type ModalContextType = {
  modal: string | null;
  openModal: (name: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { toggleAllowScroll } = useScroll();
  const [modal, setModal] = useState<string | null>(null);

  const openModal = (name: string) => {
    setModal(name);
    toggleAllowScroll();
  };

  const closeModal = () => {
    toggleAllowScroll();
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
};
