import React from "react";
import { useParams } from "react-router-dom";

export default function Singlestory() {

    const [blog, setBlog] = React.useState(null)

    const {id} = useParams()

    React.useEffect(() => {
        fetch(`http://localhost:3000/blogs/${id}`, {
            method: 'GET',
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlog(data[0])
        })
    }, [id])

    let blogJsx

   if (blog) {
    blogJsx = (
        <div className="story--container">
            <h2>{blog.title}</h2>
            <img src="../../public/salesforce.jpeg" alt="" />
            <div className="particulars--container">
                <small>{blog.author_name}</small>
                <small>{new Date(blog.created_at).toLocaleString()}</small>
            </div>
            <p>{blog.story}</p>
        </div>
    )
   }


    return (
       <div className="single--story">{ blog ? blogJsx : <h1>Loading...</h1>}</div>
    )
}