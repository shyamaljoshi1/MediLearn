import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import "./preRequisites.css";

const PreRequisites = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="pre-requisites_main__container">
            <h1 className="main_container__heading">Pre-Requisites</h1>
            <div className="main_container__first_div">
               <p className="main_container__first_div__p">
                  Before initiating the Gamification tool you need to have prior
                  knowledge about the following before you begin this module:
                  <ul className="list_view">
                     <li className="list_view_1">
                        Structure of nerve and nerve fibers
                     </li>
                     <li className="list_view_1">
                        Classification of nerve fibers
                     </li>
                     <li className="list_view_1">
                        Sensory and motor areas of the brain{" "}
                     </li>
                     <li className="list_view_1">
                        Structure and types of skeletal muscle fibril
                     </li>
                  </ul>
               </p>
            </div>
            <div className="last_div">
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/ch1">
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Chapter 1
                  </Link>
               </h2>
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/description">
                     Description{" "}
                     <HiArrowSmRight
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />
                  </Link>
               </h2>
            </div>
         </div>
      </>
   );
};

export default PreRequisites;
