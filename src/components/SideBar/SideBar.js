import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

import { BsFillCalendar2MonthFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { MdWork } from "react-icons/md";

import PeopleIcon from "@material-ui/icons/People";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">
        <p>
          <AiFillHome /> Dashboard
        </p>
      </Link>
      <Link to="/admin/teams">
        <p>
          <PeopleIcon />
          MyTeam
        </p>
      </Link>
      <Link to="/admin/tasks">
        <p>
          <MdWork />
          Task
        </p>
      </Link>

      <Link to="/admin/calendar">
        <p>
          <BsFillCalendar2MonthFill />
          Calendar
        </p>
      </Link>
      <Link to="/admin/report">
        <p>
          <BsGraphUp /> Report
        </p>
      </Link>
      <Link to="/admin/setting">
        <p>
          <AiFillSetting />
          Setting
        </p>
      </Link>

      <button className="sidebarbutton">
      <TbLogout/>  Logout
      </button>
    </div>
  );
};

export default SideBar;
