import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import "./description.css";

const Description = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="description_main__container">
            <h2 className="main_container__heading">Description</h2>
            <div className="main_container__first_div">
               <p className="main_container__first_div__p">
                  <ul className="description_list_view">
                     <li className="description_list_view_1">
                        Striated muscle fiber attached to the bones of the body
                        skeleton having a large number of cross-striations at
                        regular intervals they are skeletal muscles
                     </li>
                     <li className="description_list_view_1">
                        Their contraction results in the body movement.
                     </li>
                     <li className="description_list_view_1">
                        It constitutes about 40% of the total body mass.
                     </li>
                     <li className="description_list_view_1">
                        It is occurring consistently during all functional
                        fitness workouts and exercises.
                     </li>
                     <li className="description_list_view_1">
                        Being a health professional the defect or disorder in
                        the functioning of the skeletal muscle needs to be
                        addressed clinically.
                     </li>
                     <li className="description_list_view_1">
                        For a better clinical address of the issue its basic
                        physiological aspect needs to be well understood.
                     </li>
                     <li className="description_list_view_1">
                        The gamification will help you all to have in-depth
                        understanding of the physiological basis of skeletal
                        muscle contraction and its clinical applied aspect.
                     </li>
                  </ul>
               </p>
            </div>
            <div className="description_last_div">
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/pre_requisites">
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Pre-Requisites
                  </Link>
               </h2>
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/units">
                     Units{" "}
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

export default Description;
