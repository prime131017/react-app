import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header className="header">
                <h3>React Example</h3>
                <nav>
                    <NavLink className="headerLink" to="/articles">Home</NavLink>
                    <NavLink className="headerLink" to="/users">Users</NavLink>
                    <NavLink className="headerLink" to="/photos">Photos</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Nav