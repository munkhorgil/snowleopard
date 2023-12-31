"use client";

import { PropsWithChildren, useState } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`w-64 min-h-screen bg-teal-200 fixed left-0 overflow-y-auto transition-transform ease-in-out duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex flex-col">
          {[
            { title: "Home", path: "/dashboard" },
            { title: "Users", path: "/dashboard/users" },
            { title: "Admins", path: "/dashboard/admins" },
          ].map((menu, idx) => (
            <a key={idx} href={menu.path}>
              {menu.title}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col flex-1 ml-${
          isSidebarOpen ? "64" : "0"
        } transition-margin-left ease-in-out duration-300`}
      >
        {/* Header */}
        <div className="flex w-full h-12 bg-teal-500 fixed top-0 z-10">
          <button className="ml-2 p-2" onClick={toggleSidebar}>
            Toggle Sidebar
          </button>
          Header
        </div>

        {/* Content */}
        <div className="flex-auto overflow-y-auto bg-gray-50 p-8 mt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
