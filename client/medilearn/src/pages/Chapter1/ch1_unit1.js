import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

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
            <p
               style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                  wordWrap: "break-word",
                  width: "100%",
                  fontSize: "2.5rem"
                  // backgroundColor: "#1a1a1a"
                  //   color: "white"
               }}
            >
               This gamification plot for the learning of skeletal muscle
               contraction will be played in four sections.
            </p>

            <ul
               style={{
                  listStyleType: "circle",
                  fontSize: "2rem",
                  padding: "2rem"
               }}
            >
               <li onClick={part1()}>
                  Unit 1: Journey from CNS to Contraction Unit via Neuromuscular
                  Junction
               </li>
               <li>
                  Unit 2: Excitation contraction Coupling (Triad of T-tubule)
               </li>
               <li>
                  Unit 3: Cross-bridging cycle leading to contraction (Structure
                  and types of skeletal muscle fibril)
               </li>
               <li>Unit 4: Clinical Applied Aspect (Case-based Learning)</li>
            </ul>
         </div>
      </>
   );
};

export default Unit1;
