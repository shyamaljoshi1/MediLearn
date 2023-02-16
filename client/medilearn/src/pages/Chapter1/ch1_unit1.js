import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import "./unit1.css";

const Unit1 = () => {
   const navigate = useNavigate();

   const part1 = () => {
      navigate("/unit1/part1/one");
   };

   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="unit1_main__container">
            <h1 className="main_container__heading">
               Unit 1: Journey from CNS to Neuromuscular Junction
            </h1>
            <div className="main_container__first_div">
               <p className="main_container__first_div__p">
                  Parts:
                  <ul className="unit1_list_view">
                     <li className="unit1_list_view_1">
                        Part 1: Nerves are classified as per their functions
                     </li>
                     <li className="unit1_list_view_1">
                        Part 2: Mechanism of propagation of action potential
                        along the motor nerve till pre-synaptic terminal knob.
                     </li>
                     <li className="unit1_list_view_1">
                        Part 3: Neurotransmitter inside the synaptic vesicles
                     </li>
                     <li className="unit1_list_view_1">
                        Part 4: Transmission at the level of NMJ (end-plate,
                        Receptor, esterase)
                     </li>
                  </ul>
               </p>
            </div>
            <div className="last_div">
               <h2 className="last_div__heading2">
                  <Link style={{ textDecoration: "none" }} to="/units">
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Units
                  </Link>
               </h2>
               <h2 className="last_div__heading2">
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/unit1/part1/one"
                  >
                     Part 1{" "}
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

export default Unit1;
