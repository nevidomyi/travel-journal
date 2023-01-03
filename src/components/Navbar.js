import React from "react";
import logo from "../image/logo.svg";

export default function Navbar() {
    return(
        <nav>
            <img src={logo}/>
            <h3 className="logo--title">my travel journal.</h3>
        </nav>
    )
}

