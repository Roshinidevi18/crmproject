import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Your CSS styles

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">My CRM</div>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/login">Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;
