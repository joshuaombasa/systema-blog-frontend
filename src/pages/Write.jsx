import React, { useState } from "react";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Write() {

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


    // function handleSubmit(event) {
    //     event.preventDefault()
    //     fetch("/newBlog")
    //     console.log(blogData)
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
          const response = await fetch('http://localhost:3000/blogs/newBlog', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
          });
    
          const data = await response.json()
          console.log(data)
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
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={blogData.title}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={blogData.description}
                />
                <div className="editor--control">
                    <button className="submit--btn" >Submit</button>
                </div>

            </form>
        </div>
    )
}


// {
//     <ReactQuill
//                     theme="snow" // You can choose different themes
//                     value={editorHtml}
//                     id="description"
//                     style={{ fontSize: '20px' }} // Adjust the font size as needed
//                     className="editor"
//                     modules={modules}
//                     onChange={handleChange}
//                 />
// }