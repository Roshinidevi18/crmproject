import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="main-container">
                <Sidebar />
                <div className="content">
                    {children}  {/* This will render the main page content */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
