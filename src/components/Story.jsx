import React from "react";

export default function Story({ blog }) {
    return (
        <div className="story--container">
            <h2>{blog.title}</h2>
            <div className="particulars--container">
                <small>{blog.author_name}</small>
                <small>{new Date(blog.created_at).toLocaleString()}</small>
            </div>
            <p>{blog.story}</p>
        </div>
    )
}