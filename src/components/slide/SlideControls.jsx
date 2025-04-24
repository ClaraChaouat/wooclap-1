import React from "react";
import NavButton from "../ui/NavButton";

export default function SlideControls({ current, total, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-4 bg-gray-50 p-4">
      <NavButton onClick={onPrev} ariaLabel="Previous slide">
        ←
      </NavButton>
      <div className="text-sm">
        <span className="font-semibold text-[#146aff]">{current + 1}</span>
        <span className="text-gray-700">/{total}</span>
      </div>
      <NavButton onClick={onNext} ariaLabel="Next slide">
        →
      </NavButton>
    </div>
  );
}
