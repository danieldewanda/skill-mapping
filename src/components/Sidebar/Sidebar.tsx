import React from "react";
import { AccountToggle } from "./AccountToggle";
import { RouteSelect } from "./RouteSelect";
import { BottomSidebar } from "./BottomSidebar";
import CompanyName from "./CompanyName";
import ManagementMenu from "./ManagementMenu";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <CompanyName />
        <ManagementMenu/>
        <RouteSelect />
      </div>

      <BottomSidebar />
    </div>
  );
};
