"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import the router for navigation

const employees = [
  {
    division: "Product Design",
    position: "Senior UI/UX Designer",
    eeId: "00143",
    name: "Kadek Wikananda Laksamana Priambada",
    email: "priambadajunior@talentspace.id",
    skills: { essential: "6%", mustHave: "11%", niceToHave: "0%" },
  },
  {
    division: "General Counsel",
    position: "Financial Planning & Reporting Manager",
    eeId: "00243",
    name: "Komang Priambada",
    email: "komang.manager@talentspace.id",
    skills: { essential: "29%", mustHave: "-2%", niceToHave: "20%" },
  },
  // Add other employees here
];

// Explicitly type the parameter as a string
const getSkillClass = (value: string) => {
  const numericValue = parseFloat(value);
  if (numericValue < 0) return "bg-blue-200 text-blue-800 rounded-full flex justify-center items-center";
  if (numericValue === 0) return "bg-green-500 text-white rounded-full flex justify-center items-center";
  if (numericValue <= 25) return "bg-green-200 text-green-800 rounded-full flex justify-center items-center";
  if (numericValue <= 50) return "bg-yellow-200 text-yellow-800 rounded-full flex justify-center items-center";
  if (numericValue > 50) return "bg-red-200 text-red-800 rounded-full flex justify-center items-center";
  return ""; // Default case
};

const EmployeeTable = () => {
  const router = useRouter(); // Initialize router for navigation

  const handleRowClick = (eeId: string) => {
    // Navigate to the employee profile page
    router.push(`/dashboard/employee/${eeId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr className="h-[72px]">
            <th className="py-2 px-4 border w-[160px]">Division</th>
            <th className="py-2 px-4 border w-[420px]">Position</th>
            <th className="py-2 px-4 border w-[75px]">EE ID</th>
            <th className="py-2 px-4 border w-[412px]">Employee Name</th>
            <th colSpan={3} className="py-2 px-4 border text-center">Skills Gap (%)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="cursor-pointer hover:bg-gray-100 transition-colors" // Add hover and pointer styling
              onClick={() => handleRowClick(employee.eeId)} // Handle row click
            >
              <td className="py-2 px-4 border w-[160px]">{employee.division}</td>
              <td className="py-2 px-4 border w-[420px]">{employee.position}</td>
              <td className="py-2 px-4 border w-[75px] text-center">{employee.eeId}</td>
              <td className="py-2 px-4 border w-[412px]">
                <div>
                  <div>{employee.name}</div>
                  <div className="text-sm text-gray-500">{employee.email}</div>
                </div>
              </td>
              <td className="py-2 px-4 border w-[175px]">
                <div className={`${getSkillClass(employee.skills.essential)} h-8 w-16`}>
                  {employee.skills.essential}
                </div>
              </td>
              <td className="py-2 px-4 border w-[175px]">
                <div className={`${getSkillClass(employee.skills.mustHave)} h-8 w-16`}>
                  {employee.skills.mustHave}
                </div>
              </td>
              <td className="py-2 px-4 border w-[175px]">
                <div className={`${getSkillClass(employee.skills.niceToHave)} h-8 w-16`}>
                  {employee.skills.niceToHave}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;