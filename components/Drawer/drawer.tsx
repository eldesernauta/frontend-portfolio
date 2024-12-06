"use client";

import ReactDom from "react-dom";

import { useEffect, useState } from "react";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: string | JSX.Element | JSX.Element[];
};

export default function Drawer({ active, setActive, children }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const closeDrawer = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? "true" : "false"}
      onClick={closeDrawer}
      className="fixed -right-1 group top-1 z-50 flex h-[100dvh] data-[visible=true]:opacity-100 data-[visible=true]:visible  data-[visible=false]:invisible w-screen items-start justify-end bg-overlay transition-all duration-500 ease-in-out"
    >
      <div
        onClick={closeDrawer}
        className="z-10 h-[99vh] w-[95vw] lg:w-[50vw] flex flex-col justify-start items-end p-8 group-data-[visible=true]:translate-x-0 group-data-[visible=false]:translate-x-[50vw] bg-secondary rounded-tl-xl rounded-bl-xl font-base transition-transform duration-500 ease-in-out"
      >
        {children}
      </div>
    </div>,
    document.getElementById("drawer") as HTMLElement
  );
}