import React from "react";
import { Link, Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
export default function NavLayout() {
    return (
        <div className="navLayout--container">
                <Header />
                <Outlet />
                <Footer/>
            </div>
    )
}