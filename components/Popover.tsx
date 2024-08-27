"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

const Popover = ({
  children,
  content,
  arrow,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  arrow?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(
    null
  );
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, arrow ? 8 : 0],
        },
      },
    ],
  });

  return (
    <>
      <div ref={setReferenceElement} onClick={() => setIsOpen((prev) => !prev)}>
        {children}
        {isOpen
          ? createPortal(
              <div
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="z-20"
              >
                {arrow ? (
                  <div
                    id="arrow"
                    className="relative invisible select-none"
                    data-popper-arrow
                  >
                    <div className="absolute w-2 h-2 bg-zinc-200 visible transform rotate-45 top-[-4px] right-[20px]"></div>
                  </div>
                ) : null}
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
