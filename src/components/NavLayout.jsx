import React from "react";
import { Link, Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

export default function NavLayout() {
    return (
        <div className="navLayout--container">
            <Header />
            <div className="outlet--container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}