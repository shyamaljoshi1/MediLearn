import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import pic2 from "../../../../assets/Picture2.png";

const Two = () => {
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
                     <img src={pic2} style={{ width: "40rem" }} alt="" />
                     {/* <div className="main_click_spot"></div> */}
                  </p>
               </div>
               <div className="right__main_container">
                  <p className="right_para">
                     <ul>
                        <li>
                           The impulse from the somatic motor cortex area moves
                           towards nuclei at the brain stem and from there the
                           second neuron moves towards skeletal muscle.
                        </li>
                        <br />
                        <li>
                           The neuron from the motor cortex to nuclei at the
                           brain stem is known as the{" "}
                           <b
                              style={{
                                 fontWeight: "1000",
                                 color: "red"
                              }}
                           >
                              {" "}
                              Upper Motor Neuron{" "}
                           </b>{" "}
                           of the Cranial nerve.
                        </li>
                        <br />
                        <li>
                           The neuron from the nuclei at the brain stem to the
                           skeletal muscle is known as the{" "}
                           <b
                              style={{
                                 fontWeight: "1000",
                                 color: "red"
                              }}
                           >
                              {" "}
                              Lower Motor Neuron{" "}
                           </b>{" "}
                           of the Cranial nerve.
                        </li>
                        <br />
                        <li>
                           The tract is called the{" "}
                           <b
                              style={{
                                 fontWeight: "1000",
                                 color: "red"
                              }}
                           >
                              Corticobulbar tract
                           </b>
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
                     to="/unit1/part1/three"
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
};

export default Two;
