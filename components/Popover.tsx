"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

const Popover = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(
    null
  );
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
        {isOpen
          ? createPortal(
              <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="z-20"
              >
                {content}
              </div>,
              document.body
            )
          : null}
      </div>
    </>
  );
};

export default Popover;
