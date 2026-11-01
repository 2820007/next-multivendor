
import React from "react";
import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-slate-50">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="ml-64 h-screen">

        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable Main Content */}
        <main className="h-screen overflow-y-auto pt-16">
          <div className="p-6">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

