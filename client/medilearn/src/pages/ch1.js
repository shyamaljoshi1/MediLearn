import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../components/sidebar";
import { Link } from "react-router-dom";
const Chapter1 = () => {
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
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "purple",
                  height: "100%",
                  width: "fit-content",
                  border: "1px solid black"
               }}
            >
               <h1
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     width: "fit-content",
                     height: "fit-content",
                     fontSize: "3rem",
                     padding: "2rem"
                  }}
               >
                  Chapter 1: Skeletal Muscle Contraction
               </h1>
               {/* <PreRequisites /> */}
               {/* <Description /> */}

               <div
                  style={{
                     backgroundColor: "purple",
                     height: "100%",
                     width: "100%",
                     border: "1px solid black",
                     fontSize: "1.5rem",
                     alignSelf: "end"
                     //  top: "3rem",
                  }}
               >
                  <div>
                     Pre - Requisites
                     <Link to></Link>
                  </div>
                  <h2>Next</h2>
               </div>
            </div>
         </div>
      </>
   );
};

export default Chapter1;
