import React, { useState } from "react";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from "react-router-dom";

export default function Write() {

    const navigate = useNavigate()

    const [blogData, setBlogData] = useState({
        title: "",
        description: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setBlogData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }


    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/blogs/newBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : localStorage.getItem('token')
                },
                body: JSON.stringify(blogData),
            });

            const data = await response.json()
            navigate(`/blog/${data.id}`)
            
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };



    return (
        <div className="write--container">
            <form onSubmit={handleSubmit} className="content">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    required
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={blogData.title}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    required
                    name="description"
                    onChange={handleChange}
                    rows='20'
                    value={blogData.description}
                />
                <div className="editor--control">
                    <button className="submit--btn" >Submit</button>
                </div>

            </form>
        </div>
    )
}

