import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header className="header">
                <h3 className="header_title">React Example</h3>
                <nav>
                    <NavLink className="header_link" end to="/articles">Home</NavLink>
                    <NavLink className="header_link" to="/users">Users</NavLink>
                    <NavLink className="header_link" to="/photos">Photos</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Nav