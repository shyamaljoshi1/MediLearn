import React from "react";
import './sidebarMain.css';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


// import 'react-pro-sidebar/dist/css/styles.css';


const SidebarMain = () => {
    const navigate = useNavigate();
    function home() {
        navigate("/home");
    }
    function ch1() {
        navigate("/ch1");
    }
    return (
        <Sidebar className="sidebar" style={{ position: 'fixed', top: '0', bottom: '0' }}>
            <Menu>
                <img src={logo} style={{ width: '18rem' }} alt="" />
            </Menu>
            <Menu claasName="sidebar__menu">
                <MenuItem className="menu_item" onClick={() => { home() }}>
                Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
                <MenuItem className="menu_item" onClick={() => { ch1() }}>
                Chapter 1&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
                <MenuItem className="menu_item">
                Chapter 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
                <MenuItem className="menu_item">
                Chapter 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
            </Menu>
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu claasName="sidebar__menu">
                <MenuItem className="menu_item" >
                Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SidebarMain;
