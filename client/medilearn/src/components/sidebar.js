import React from "react";
import "./sidebar.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import logo from "../assets/logo.png";
import { FaAngleRight } from "react-icons/fa";
// import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

// import 'react-pro-sidebar/dist/css/styles.css';

const SidebarCustom = () => {
   const navigate = useNavigate();
   function home() {
      navigate("/home");
   }
   function preReq() {
      navigate("/pre_requisites");
   }
   function desc() {
      navigate("/description");
   }
   function unit1() {
      navigate("/Unit1");
   }

   function part1() {
      navigate("/unit1/part1/one");
   }
   return (
      <Sidebar
         className="sidebar"
         style={{
            position: "fixed",
            top: "0",
            height: "100vh",
            overflow: "hidden"
         }}
      >
         <Menu>
            <img src={logo} style={{ width: "18rem" }} alt="" />
         </Menu>
         <Menu
            className="sidebar__menu"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
         >
            <MenuItem
               className="menu_item"
               onClick={() => {
                  preReq();
               }}
            >
               Pre-requisite
            </MenuItem>
            <MenuItem
               className="menu_item"
               onClick={() => {
                  desc();
               }}
            >
               Description
            </MenuItem>
            <SubMenu
               label={
                  <>
                     Unit 1 &nbsp;&nbsp;&nbsp;
                     <FaAngleRight
                        style={{ backgroundColor: "black !important" }}
                     />
                  </>
               }
               className="sidebar__menu"
               // onClick={() => {
               //    unit1();
               // }}
            >
               <MenuItem
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => {
                     part1();
                  }}
               >
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 1{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 2{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 3{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 4{" "}
               </MenuItem>
            </SubMenu>
            <SubMenu
               label={
                  <>
                     Unit 2 &nbsp;&nbsp;&nbsp;
                     <FaAngleRight
                        style={{ backgroundColor: "black !important" }}
                     />
                  </>
               }
               className="sidebar__menu"
            >
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 1{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 2{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 3{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 4{" "}
               </MenuItem>
            </SubMenu>
            <SubMenu
               label={
                  <>
                     Unit 3 &nbsp;&nbsp;&nbsp;
                     <FaAngleRight
                        style={{ backgroundColor: "black !important" }}
                     />
                  </>
               }
               className="sidebar__menu"
            >
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 1{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 2{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 3{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 4{" "}
               </MenuItem>
            </SubMenu>
            <SubMenu
               label={
                  <>
                     Unit 4 &nbsp;&nbsp;&nbsp;
                     <FaAngleRight
                        style={{ backgroundColor: "black !important" }}
                     />
                  </>
               }
               className="sidebar__menu"
            >
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 1{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 2{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 3{" "}
               </MenuItem>
               <MenuItem style={{ fontSize: "1.5rem" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;Part 4{" "}
               </MenuItem>
            </SubMenu>

            <MenuItem
               className="menu_item"
               onClick={() => {
                  home();
               }}
            >
               Home
            </MenuItem>
            <MenuItem className="menu_item">
               Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </MenuItem>
         </Menu>
         <Menu />
         <Menu />
         <Menu />
         <Menu />
         {/* <Menu className="sidebar__menu">
                
            </Menu> */}
      </Sidebar>
   );
};

export default SidebarCustom;
