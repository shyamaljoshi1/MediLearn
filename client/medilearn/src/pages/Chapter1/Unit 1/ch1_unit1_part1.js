import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

import One from "./Part1/one";
const Part1 = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div
            style={{
               marginLeft: "50rem",
               marginTop: "5rem",
               width: "fit-content",
               height: "100%",
               padding: "2rem 2rem",
               border: "1px solid black",
               display: "flex",
               flexDirection: "column"
            }}
         >
            <Link
               to="/unit1"
               style={{
                  width: "100%",
                  fontSize: "2.5rem"
               }}
            >
               Unit 1
            </Link>
         </div>
         <div>
            <One />
         </div>
      </>
   );
};

export default Part1;
