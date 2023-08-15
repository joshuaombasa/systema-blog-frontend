import React from "react";
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className="header--container">
            <Link className="logo" to="/">systema</Link>
            <div className="nav--links">
                <Link to="home">Home</Link>
                <Link to="login">Login</Link>
                <Link to="signup">Signup</Link>
            </div>
        </div>
    )
}