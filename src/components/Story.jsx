import React from "react";
import { Link } from "react-router-dom";
export default function Story({ blog }) {

    

    return (
        <div className="border--bottom story--container">
            <h2>{blog.title}</h2>
            <img src="../../public/salesforce.jpeg" alt="" />
            <div className="particulars--container">
                <small>{blog.author_name}</small>
                <small>{new Date(blog.created_at).toLocaleString()}</small>
            </div>
            <p>{blog.story}</p>
            <button><Link to={`blog/${blog.id}`}>Read more...</Link></button>
        </div>
    )
}