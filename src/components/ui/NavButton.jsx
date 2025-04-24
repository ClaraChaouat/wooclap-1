import React from "react";

export default function NavButton({ onClick, ariaLabel, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-600 transition-colors duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 active:border-blue-600 active:bg-gray-200 active:text-gray-800"
    >
      {children}
    </button>
  );
}
