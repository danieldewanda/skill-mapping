"use client";

import React from "react";
import { useParams } from "next/navigation";

// Define TypeScript interfaces
interface Skill {
  name: string;
  category: string;
  score: number;
  percent: number;
}

interface Employee {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  position: string;
  division: string;
  manager: string;
  tenure: string;
  skills: Skill[];
}

// Employee data with type annotations
const employees: Employee[] = [
  {
    id: "00143",
    name: "Kadek Wikananda Laksamana Priambada",
    email: "priambadajunior@talentspace.id",
    joinDate: "2021-10-11",
    position: "Senior UI/UX Designer",
    division: "Product Design",
    manager: "Komang Priambada",
    tenure: "3 years, 5 months, 12 days",
    skills: [
      { name: "Design System", category: "Must-Have", score: 4, percent: 85 },
      { name: "Interaction Design", category: "Nice-to-Have", score: 3, percent: 65 },
    ],
  },
  {
    id: "00243",
    name: "Komang Priambada",
    email: "komang.manager@talentspace.id",
    joinDate: "2019-06-15",
    position: "Financial Planning & Reporting Manager",
    division: "General Counsel",
    manager: "Nyoman Corporate",
    tenure: "6 years, 10 months, 2 days",
    skills: [
      { name: "Financial Analysis", category: "Must-Have", score: 5, percent: 95 },
      { name: "Reporting Tools", category: "Nice-to-Have", score: 4, percent: 80 },
    ],
  },
];

const EmployeeProfile = () => {
  const { id } = useParams(); // Get employee ID from the URL

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Employee Not Found</h1>
        <p>Sorry, the requested employee profile does not exist.</p>
      </div>
    );
  }

  // Render skill with progress bar and smooth transition
  const renderSkill = (skill: Skill) => {
    const barColor =
      skill.percent >= 75
        ? "bg-green-500"
        : skill.percent >= 50
        ? "bg-yellow-500"
        : "bg-red-500";

    return (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>{skill.name}</span>
          <span>{skill.percent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${barColor} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${skill.percent}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Grid container for side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold border-b pb-4 mb-6">Employee Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {employee.name}
              </p>
              <p>
                <strong>ID:</strong> {employee.id}
              </p>
              <p>
                <strong>Email:</strong> {employee.email}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Division:</strong> {employee.division}
              </p>
              <p>
                <strong>Position:</strong> {employee.position}
              </p>
              <p>
                <strong>Manager:</strong> {employee.manager}
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p>
                <strong>Join Date:</strong> {employee.joinDate}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <strong>Tenure:</strong> {employee.tenure}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold border-b pb-4 mb-6">Skills Overview</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Must-Have Skills</h3>
              <div>
                {employee.skills
                  .filter((skill) => skill.category === "Must-Have")
                  .map(renderSkill)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Nice-to-Have Skills</h3>
              <div>
                {employee.skills
                  .filter((skill) => skill.category === "Nice-to-Have")
                  .map(renderSkill)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
