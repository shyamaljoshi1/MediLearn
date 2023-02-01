import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

const PreRequisites = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div
            style={{
               marginLeft: "50rem",
               marginTop: "10rem",
               width: "60%",
               height: "100%",
               display: "flex",
               flexDirection: "column",
               border: "1px solid black"
            }}
         >
            <h2 style={{ fontSize: "3rem" }}>
               <b>
                  <u>Pre-Requisites</u>
               </b>
            </h2>
            <div style={{ padding: 20, backgroundColor: "purple" }}>
               <p
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     // alignItems: "center",
                     wordWrap: "break-word",
                     width: "100%",
                     fontSize: "2.5rem",
                     backgroundColor: "#1a1a1a"
                     //   color: "white"
                  }}
               >
                  Before initiating the gamification tool you need to have prior
                  knowledge about the following before you begin this module:
                  <ul
                     style={{
                        listStyleType: "circle",
                        fontSize: "2rem",
                        padding: "2rem"
                     }}
                  >
                     <li>Structure of nerve and nerve fibers</li>
                     <li>Classification of nerve fibers</li>
                     <li>Sensory and motor areas of the brain </li>
                     <li>Structure and types of skeletal muscle fibril</li>
                  </ul>
               </p>
            </div>
         </div>
      </>
   );
};

export default PreRequisites;
