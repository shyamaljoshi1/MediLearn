import React, { useState } from "react";

import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarCustom from "../../../../components/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import {
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   AlertDialog,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogCloseButton,
   AlertDialogOverlay,
   Button
} from "@chakra-ui/react";

import "./one.css";

import pic1 from "../../../../assets/Picture1.png";

function One() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const cancelRef = React.useRef();
   return (
      <>
         <ProSidebarProvider>
            <SidebarCustom />
         </ProSidebarProvider>
         <div className="one_main__container">
            <h1 className="main_container__heading">
               Part1: Nerves are classified as per their functions
            </h1>
            <p className="main_container__first_div__p">
               <img src={pic1} style={{ width: "40rem" }} alt="" />
               <div className="main_click_spot"></div>
            </p>
            <div className="last_div">
               <h2 className="last_div__heading2">
                  <Link
                     style={{ textDecoration: "none" }}
                     // style={this.props.canClick ? {pointerEvents: "none"} : null}
                     to="/unit1"
                  >
                     <HiArrowSmLeft
                        style={{
                           fontSize: "1.5rem"
                        }}
                     />{" "}
                     Unit 1
                  </Link>
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
