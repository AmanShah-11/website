import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const SidebarorNone = () => {
    return (
      <SideBarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {/* First link is for dummy margin purposes */}
            <SidebarLink to="about" onClick={() => toggle()}></SidebarLink>
            <SidebarLink to="about" onClick={() => toggle()}>
              About
            </SidebarLink>
            <SidebarLink to="work" onClick={() => toggle()}>
              Work
            </SidebarLink>
            <SidebarLink to="projects" onClick={() => toggle()}>
              Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={() => toggle()}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/resume">Resume</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
        <h1>In function</h1>
      </SideBarContainer>
      // <h1>In function</h1>
    );
  };

  if (isOpen) {
    return SidebarorNone();
    // return (
    //   <>
    //     {" "}
    //     <h1>bye</h1>
    //   </>
    // );
  } else {
    return <>{/* <h1>Hi</h1> */}</>;
  }
  return (
    // <SideBarContainer isOpen={isOpen} onClick={toggle}>
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => toggle()}>
            About
          </SidebarLink>
          <SidebarLink to="work" onClick={() => toggle()}>
            Work
          </SidebarLink>
          <SidebarLink to="projects" onClick={() => toggle()}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={() => toggle()}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/resume">Resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
