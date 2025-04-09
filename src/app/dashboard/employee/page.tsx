"use client";

import React from "react";
import TableEmployee from "@/components/Dashboard/TableEmployee"; // Ensure path correctness

const EmployeePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Employee List</h1>
      <TableEmployee /> {/* Renders the employee table */}
    </div>
  );
};

export default EmployeePage;