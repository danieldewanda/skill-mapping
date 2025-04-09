import React from 'react'

const CompanyName = () => {
  return (
    <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">PJ Company</span>
          <span className="text-xs block text-stone-500">Corporate  - 20 Members</span>
        </div>
      </button>
    </div>
  );
};


export default CompanyName
