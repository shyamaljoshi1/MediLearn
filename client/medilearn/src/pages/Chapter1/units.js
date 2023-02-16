import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import "./units.css";

const Units = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="units_main__container">
            <h1 className="main_container__heading">All units of Chapter 1</h1>
            <div className="main_container__first_div">
               <p className="main_container__first_div__p">
                  This gamification plot for the learning of skeletal muscle
                  contraction will be played in four sections.
                  <ul className="units_list_view">
                     <li
                        className="units_list_view_1"
                        // onClick={part1()}
                     >
                        Unit 1: Journey from CNS to Contraction Unit via
                        Neuromuscular Junction
                     </li>
                     <li className="units_list_view_1">
                        Unit 2: Excitation contraction Coupling (Triad of
                        T-tubule)
                     </li>
                     <li className="units_list_view_1">
                        Unit 3: Cross-bridging cycle leading to contraction
                        (Structure and types of skeletal muscle fibril)
                     </li>
                     <li className="units_list_view_1">
                        Unit 4: Clinical Applied Aspect (Case-based Learning)
                     </li>
                  </ul>
               </p>
            </div>
            <div className="last_div">
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/description">
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Description
                  </Link>
               </h2>
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/unit1">
                     Unit 1{" "}
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

export default Units;
