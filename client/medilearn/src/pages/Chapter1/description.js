import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";

const Description = () => {
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
               border: "1px solid black",
               paddingTop: 30
            }}
         >
            <h2 style={{ fontSize: "3rem" }}>
               <b>
                  <u>Description</u>
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
                  <ul
                     style={{
                        listStyleType: "circle",
                        fontSize: "2rem",
                        padding: "2rem"
                     }}
                  >
                     <li>
                        Striated muscle fiber attached to the bones of the body
                        skeleton having a large number of cross-striations at
                        regular intervals they are skeletal muscles
                     </li>
                     <li>Their contraction results in the body movement.</li>
                     <li>It constitutes about 40% of the total body mass.</li>
                     <li>
                        It is occurring consistently during all functional
                        fitness workouts and exercises.
                     </li>
                     <li>
                        Being a health professional the defect or disorder in
                        the functioning of the skeletal muscle needs to be
                        addressed clinically.
                     </li>
                     <li>
                        For a better clinical address of the issue its basic
                        physiological aspect needs to be well understood.
                     </li>
                     <li>
                        The gamification will help you all to have in-depth
                        understanding of the physiological basis of skeletal
                        muscle contraction and its clinical applied aspect.
                     </li>
                  </ul>
               </p>
            </div>
         </div>
      </>
   );
};

export default Description;
