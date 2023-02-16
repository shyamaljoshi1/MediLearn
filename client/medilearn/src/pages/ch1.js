import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../components/sidebar";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import "./ch1.css";

const Chapter1 = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="ch1__main_container">
            <div className="main_container__first_div">
               <h1 className="main_container__heading">
                  Chapter 1: Skeletal Muscle Contraction
               </h1>
               <div className="last_div">
                  <h2 className="last_div__heading">
                     <Link
                        style={{ textDecoration: "none" }}
                        to="/pre_requisites"
                     >
                        Pre-Requisites{" "}
                        <HiArrowSmRight
                           style={{
                              fontSize: "1.5rem"
                           }}
                        />
                     </Link>
                  </h2>
               </div>
            </div>
         </div>
      </>
   );
};

export default Chapter1;
