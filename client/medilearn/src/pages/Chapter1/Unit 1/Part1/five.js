import React, { useState } from "react";

import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

// import "./one.css";

import pic5 from "../../../../assets/Picture5.png";

function Five() {
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
                     <img src={pic5} style={{ width: "40rem" }} alt="" />
                     {/* <div className="main_click_spot"></div> */}
                  </p>
               </div>
               <div className="right__main_container">
                  <p className="right_para">
                  <ul>
                        <li>
                           The skeletal muscle activity depends on the pattern
                           and rate of impulse discharge from the α-motor neuron
                           supplying the muscle A collection of muscle fibers
                           innervated by a single motor neuron. This is known as
                           <b
                              style={{
                                 fontWeight: "1000",
                                 color: "red"
                              }}
                           >
                              Motor Unit
                           </b>
                           .
                        </li>
                        <br />
                        <li>
                           There are two types of motor units:
                           <br />A Small MU and a Large MU
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
                     to="/unit1/part1/six"
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

export default Five;
