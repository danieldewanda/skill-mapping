"use client";

import React from "react";
import { useParams } from "next/navigation"; // Dynamically capture the employee ID from the URL

const employees = [
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
  const { id } = useParams(); // Get employee ID from URL

  const employee = employees.find((emp) => emp.id === id); // Find employee by ID

  if (!employee) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Employee Not Found</h1>
        <p>Sorry, the requested employee profile does not exist.</p>
      </div>
    );
  }

  const renderSkill = (skill) => {
    const barColor =
      skill.percent >= 75
        ? "bg-green-400"
        : skill.percent >= 50
        ? "bg-yellow-400"
        : "bg-red-400";

    return (
      <div key={skill.name} className="space-y-1">
        <div className="text-sm font-medium text-gray-700">{skill.name}</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-full bg-gray-200 rounded">
            <div className={`h-full ${barColor} rounded`} style={{ width: `${skill.percent}%` }}></div>
          </div>
          <div className="text-sm">{skill.percent}%</div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-8">
      {/* Personal Information */}
      <section className="border-b pb-6">
        <h1 className="text-3xl font-bold mb-4">Employee Profile</h1>
        <div className="space-y-2">
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Division:</strong> {employee.division}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Manager:</strong> {employee.manager}</p>
          <p><strong>Join Date:</strong> {employee.joinDate}</p>
          <p><strong>Tenure:</strong> {employee.tenure}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Must-Have Skills</h3>
            {employee.skills
              .filter((skill) => skill.category === "Must-Have")
              .map(renderSkill)}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Nice-to-Have Skills</h3>
            {employee.skills
              .filter((skill) => skill.category === "Nice-to-Have")
              .map(renderSkill)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeProfile;