import React from "react";

export default function SlideList({ slides, currentSlide, setCurrentSlide }) {
  return (
    <div className="relative z-20 h-full min-h-0 w-56 border-l border-gray-200/40 bg-white shadow-[inset_-4px_0_6px_-2px_rgba(0,0,0,0.08)]">
      <ul className="h-full space-y-2 overflow-y-auto p-2">
        {slides.map((slide, i) => {
          const isActive = i === currentSlide;
          return (
            <li key={slide.id}>
              <button
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-current={isActive ? "true" : undefined}
                className={`w-full rounded-lg border px-4 py-3 text-left transition-colors duration-150 ${
                  isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                } `}
              >
                <span className="block text-sm font-semibold text-gray-800">
                  Slide {i + 1}
                </span>
                <span className="block truncate text-xs text-gray-500">
                  {slide.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* fade‐out gradient at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
