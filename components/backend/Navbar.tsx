"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Bell, User, AlignJustify } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("dashboard-theme");
    const dark = savedTheme === "dark";
    setIsDark(dark);
    document.documentElement.dataset.dashboardTheme = dark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.dataset.dashboardTheme = nextIsDark
      ? "dark"
      : "light";
    window.localStorage.setItem(
      "dashboard-theme",
      nextIsDark ? "dark" : "light",
    );
  }

  return (
    <header className="fixed left-64 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
          aria-label="Toggle sidebar"
        >
          <AlignJustify size={21} />
        </button>

        <h2 className="text-sm font-semibold text-slate-700">
          GreenMart Admin
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg p-2 text-slate-500 transition  hover:bg-emerald-50 hover:text-emerald-700"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          title={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
          {isDark ? (
            <Moon size={20} />
          ) : (
            <Sun className="curser-pointer" size={20} />
          )}
        </button>

        <button
          className="relative rounded-lg p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="ml-2 flex cursor-pointer items-center gap-2 border-l border-slate-200 pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <User size={19} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
