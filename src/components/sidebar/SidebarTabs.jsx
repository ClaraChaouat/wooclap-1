import React, { useState } from "react";
import questions from "../../data/questions";

export default function SidebarTabs() {
  const [activeTab, setActiveTab] = useState("insert");

  const tabs = [
    { id: "insert", label: "Insert questions" },
    { id: "update", label: "Update presentation" },
  ];

  return (
    <aside className="flex h-full flex-col bg-white">
      <nav className="flex border-b border-gray-200 [&>button:first-child]:border-r [&>button:first-child]:border-gray-200">
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTab;
          const className =
            [
              "relative flex-1 whitespace-pre-line text-center leading-snug",
              "py-3 text-sm font-medium transition-all duration-150",
              "border border-transparent",
              isActive
                ? "text-[#146aff]"
                : "text-gray-700 hover:text-[#146aff]",
              "hover:bg-[#f4f9ff] hover:border-[#146aff]",
            ].join(" ") +
            (isActive
              ? " after:content-[''] after:absolute after:inset-x-0" +
                " after:-bottom-[2px] after:border-b-2 after:border-[#146aff]"
              : "");

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={className}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-2 flex-1 overflow-y-auto">
        {activeTab === "insert" ? (
          <ul className="space-y-2">
            {questions.map((q) => (
              <li
                key={q.id}
                className="flex cursor-pointer items-center gap-2 px-3 py-2 transition-colors hover:bg-[#f4f9ff]"
              >
                <span className="text-lg">{q.icon}</span>
                <span className="text-sm text-gray-800">{q.label}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
            Presentation updated on April 18th, 2025.
          </div>
        )}
      </div>
    </aside>
  );
}
