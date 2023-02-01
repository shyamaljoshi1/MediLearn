import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

import pic1 from "../../../assets/Picture1.png";

const Part1 = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div
            style={{
               marginLeft: "50rem",
               width: "60%",
               height: "100%",
               display: "flex",
               flexDirection: "column",
               border: "1px solid black"
            }}
         >
            <h2
               style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                  wordWrap: "break-word",
                  width: "100%",
                  fontSize: "3.5rem",
                  textDecoration: "underline",
                  textWeight: "bold"
               }}
            >
               Part1: Nerves are classified as per their functions
            </h2>
            <p
               style={{
                  display: "flex",
                  padding: "2rem"
               }}
            >
               <img src={pic1} style={{ width: "45rem" }} alt="" />
            </p>
            <div
               style={{
                  display: "flex",
                  width: "100%",
                  // flexDirection: "row",
                  // justifyContent: "",
                  // alignItems: "flex-end",
                  // padding: "2rem",
                  border: "1px solid black",
                  fontSize: "2rem",
                  right: "10rem",
                  backgroundColor: "rgba(255, 255, 255, 0.5) !important"
               }}
            >
               Next();
            </div>
         </div>
      </>
   );
};

export default Part1;
