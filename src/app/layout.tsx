"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard/employee on initial load
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      router.push("/dashboard/employee");
    }
  }, [router]);

  return (
    <html lang="en">
      <body className="text-stone-950 bg-stone-100">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-stone-200 h-full overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-6 overflow-y-auto bg-stone-50">{children}</main>
        </div>
      </body>
    </html>
  );
}