"use client";

import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  PiUsersThree,
  PiExam,
  PiNoteLight,
  PiClockCountdownLight,
  PiMoney,
} from "react-icons/pi";

export const RouteSelect = () => {
  return (
    <div className="space-y-4">
      {/* Compensation & Benefits Section */}
      <SectionHeader title="Compensation & Benefits" />
      <div className="space-y-1">
        <Route Icon={PiNoteLight} title="Reimbursement" href="/dashboard/reimbursement" />
        <Route Icon={PiClockCountdownLight} title="Time Off" href="/dashboard/time-off" />
        <Route Icon={PiMoney} title="PaySlip" href="/dashboard/payslip" />
      </div>

      {/* Management Section */}
      <SectionHeader title="Management" />
      <div className="space-y-1">
        <Route Icon={PiUsersThree} title="Employee" href="/dashboard/employee" />
        <Route Icon={PiExam} title="Training & Development" href="/dashboard/training" />
      </div>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-xs font-semibold text-stone-400 uppercase px-2">{title}</h2>
);

const Route = ({ Icon, title, href }: { Icon: IconType; title: string; href: string }) => {
  return (
    <Link href={href} className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500 shadow-none">
      <Icon />
      <span>{title}</span>
    </Link>
  );
};