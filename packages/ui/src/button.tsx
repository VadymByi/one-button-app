// packages/ui/src/button.tsx
"use client";

import { ReactNode } from "react";

interface ClickButtonProps {
  children: ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  status: "idle" | "loading" | "success";
}

export const ClickButton = ({
  children,
  onClick,
  status,
}: ClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={status === "loading"}
      className={`
        px-8 py-4 text-2xl font-bold transition-all duration-300 rounded-xl shadow-2xl
        ${
          status === "success"
            ? "bg-green-500 hover:bg-green-600 text-white scale-110"
            : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {status === "loading" ? "Processing..." : children}
    </button>
  );
};
