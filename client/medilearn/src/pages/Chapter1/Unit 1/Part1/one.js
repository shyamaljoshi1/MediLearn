import React, { useState } from "react";

import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import "./one.css";

import pic1 from "../../../../assets/Picture1.png";

function One() {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="one_main__container">
            <h1 className="main_container__heading">
               Part1: Nerves are classified as per their functions
            </h1>
            <div className="main__two_container">
               <div className="left__main_container">
                  <p className="main_container__first_div__p">
                     <img src={pic1} style={{ width: "40rem" }} alt="" />
                     {/* <div className="main_click_spot"></div> */}
                  </p>
               </div>
               <div className="right__main_container">
                  <p className="right_para">
                     <ul>
                        <li>
                           The neurons initiating from the brain (Cranial) can
                           reach to the effector organ directly or via the
                           spinal cord.
                        </li>
                        <br />
                        <li>
                           If they reach directly to the effector organ then
                           they are termed cranial neuron/nerve.
                        </li>
                        <br />
                        <li>
                           If it reaches to spinal cord first and then from
                           there it reaches the effector organ it is known as
                           the Spinal nerve/ neuron
                        </li>
                     </ul>
                  </p>
               </div>
            </div>
            <div className="last_div">
               <h2 className="last_div__heading2">
                  {/* <Link
                     style={{ textDecoration: "none" }}
                     // style={this.props.canClick ? {pointerEvents: "none"}  : null}
                     to="/unit1"
                  >
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Unit 1
                  </Link> */}
               </h2>
               <h2 className="last_div__heading2">
                  <Link
                     style={{ textDecoration: "none" }}
                     to="/unit1/part1/two"
                  >
                     Next{" "}
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
}

export default One;
