import React from "react";
import { LogoWrapper, StyledSidebar } from "./Sidebar.styled";
import { MdEventNote, MdAdd } from "react-icons/md";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <LogoWrapper>LOGO</LogoWrapper>
      <nav>
        <ul>
          <li className="active">
            <MdEventNote size={30} />
            <p>Events</p>
          </li>
          <li>
            <MdAdd size={30} />
            <p>Add</p>
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
