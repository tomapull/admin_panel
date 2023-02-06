import React from "react";
import Search from "./Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminHeader() {
  return (
    <div className="admin-header w-784">
      <div className="h-full px-4 bg-white header-bar">
        <div className="flex float-left">
          <div className="header-label">
            <label>ERP</label>
          </div>
        </div>
        <button></button>
        <div className="flex float-right h-full">
          <button className="relative my-auto btn-notification">
            <FontAwesomeIcon icon="fa-regular fa-bell" className="gray" />
            <div className="notification-alert"></div>
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
}