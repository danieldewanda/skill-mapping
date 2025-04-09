"use client";

import React from "react";
import { PiBell } from "react-icons/pi"; // Importing the bell icon
import { FaRegCircle } from "react-icons/fa"; // Assuming a placeholder for the circular logo

export const BottomSidebar = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-14 border-t px-3 border-stone-300 items-center justify-between text-xs">
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <div className="relative">
          <PiBell className="text-stone-500 hover:text-stone-700 transition-colors cursor-pointer" size={24} />
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            99+
          </div>
        </div>

        {/* Circular Logo */}
        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
          <span className="text-sm font-semibold">J</span>
        </div>
      </div>

    </div>
  );
};