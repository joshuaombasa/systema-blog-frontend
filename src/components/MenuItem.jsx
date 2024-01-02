import React from "react";

import { Link } from "react-router-dom";

export default function MenuItem({ blog }) {
    return (
        <Link to={`/blog/${blog.id}`} className="story--container menu--item--container">
            <img src="../../public/salesforce.jpeg" alt="" />
            <h2>{blog.title}</h2>
            <button>Read more...</button>
        </Link>
    )
}