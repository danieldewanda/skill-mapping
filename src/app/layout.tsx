"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar"; // Ensure Sidebar is exported properly
import "./globals.css"; // Global styles for consistency

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-stone-950 bg-stone-100">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-stone-200 h-full overflow-y-auto">
            <Sidebar /> {/* Sidebar should handle the navigation items */}
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-6 overflow-y-auto bg-stone-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}