import React from "react";

export default function SlideViewer({ slide }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow">
      <h2 className="mb-2 text-center text-2xl font-semibold text-gray-800">
        {slide.title}
      </h2>
      <p className="mb-6 max-w-xl text-center text-base text-gray-600">
        {slide.content}
      </p>
    </div>
  );
}
