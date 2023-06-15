import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinkbar() {
    return (
        <header id="navbar">
            <h2>Muzaffer Barış Yavuz</h2>
            <div id="navlink-container">
                <NavLink to=".">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="skills">Skills</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </div>
        </header>
    )
}