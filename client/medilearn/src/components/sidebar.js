import React from "react";
import './sidebar.css';
import { Sidebar, Menu, MenuItem,SubMenu } from 'react-pro-sidebar';
import logo from '../assets/logo.png';
// import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from 'react-router-dom';


// import 'react-pro-sidebar/dist/css/styles.css';


const SidebarCustom = () => {
    const navigate = useNavigate();
    function home() {
        navigate("/home");
    }
    return (
        <Sidebar className="sidebar" style={{ position: 'fixed', top: '0', bottom: '0' }}>
            <Menu>
                <img src={logo} style={{ width: '18rem' }} alt="" />
            </Menu>
            <Menu claasName="sidebar__menu">
                <MenuItem className="menu_item" >
                    Pre-requisite&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
                <MenuItem className="menu_item" >
                    Discription 
                </MenuItem>
                <SubMenu label="Unit 1" claasName="sidebar__menu">
                    <MenuItem className="menu_item"> Part 1 </MenuItem>
                    <MenuItem className="menu_item"> Part 2 </MenuItem>
                    <MenuItem className="menu_item"> Part 3 </MenuItem>
                    <MenuItem className="menu_item"> Part 4 </MenuItem>
                </SubMenu>
                <MenuItem className="menu_item" >
                    Unit 2
                </MenuItem>
                <MenuItem className="menu_item">
                    Unit 3
                </MenuItem>
                <MenuItem className="menu_item">
                    Unit 4
                </MenuItem>
            </Menu>
            <Menu />
            <Menu claasName="sidebar__menu">
                <MenuItem className="menu_item" onClick={() => { home() }}>
                    Home
                </MenuItem>
                <MenuItem className="menu_item" >
                    Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SidebarCustom;
