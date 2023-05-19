import React, { useState } from 'react';
import './dashboard.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaEnvelope,
    FaListOl,
    FaQuestionCircle,
    FaRegEnvelope,
    FaWallet,
    FaRegMoneyBillAlt,
    FaCamera,
    FaVideo,
    FaLock,
    FaBook
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/student",
            name: "Student",
            icon: <FaUserAlt />
        },
        {
            path: "/exam",
            name: "Exam",
            icon: <FaBook />
        },
        {
            path: "/final-exam-request",
            name: "Final Exam",
            icon: <FaBook />
        },
        {
            path: "/final-exam-request",
            name: "Add Question",
            icon: <FaQuestionCircle />
        },
        {
            path: "/notice",
            name: "Notice",
            icon: <FaListOl />
        },
        {
            path: "/inbox",
            name: "Inbox",
            icon: <FaEnvelope />
        },
        {
            path: "/",
            name: "Contact",
            icon: <FaRegEnvelope />
        },
        {
            path: "/",
            name: "Wallet",
            icon: <FaWallet />
        },
        {
            path: "/",
            name: "Fees Management",
            icon: <FaRegMoneyBillAlt />
        },
        {
            path: "/",
            name: "All Test",
            icon: <FaBook />
        },
        {
            path: "/zoomclass",
            name: "Online Classes",
            icon: <FaVideo />
        },
        {
            path: "/",
            name: "Gmeet Live Classes",
            icon: <FaCamera />
        },
        {
            path: "/",
            name: "Message",
            icon: <FaEnvelope />
        },
        {
            path: "/",
            name: "Users",
            icon: <FaUserAlt />
        },
        {
            path: "/",
            name: "Change Password",
            icon: <FaLock />
        }
    ]
    return (
        <div className="sidebarMenu">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section" style={{ padding: "10px 15px" }}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">EMS</h1>
                    <div style={{ marginLeft: isOpen ? "95px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;