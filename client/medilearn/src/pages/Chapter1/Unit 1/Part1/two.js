import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

// import pic1 from "../../../assets/Picture1.png";

const Two = () => {
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>

         
      </>
   );
};

export default Two;
