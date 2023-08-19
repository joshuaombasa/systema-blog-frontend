import React from "react";


export default function MenuItem({ blog }) {
    return (
        <div className="story--container menu--item--container">
            <img src="../../public/salesforce.jpeg" alt="" />
            <h2>{blog.title}</h2>
            <button>Read more...</button>
        </div>
    )
}