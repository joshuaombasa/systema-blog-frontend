import React from "react";

import MenuItem from "./MenuItem";

export default function Menuparent() {

    const [blogsData, setBlogsData] = React.useState(null)

    React.useEffect(() => {
        fetch('http://localhost:3000/blogs', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                setBlogsData(data)
            })
    }, [])

    let blogsJsx
    if (blogsData) {
        blogsJsx = blogsData.map(blog => (
            <MenuItem key={blog.id} blog={blog} />
        ))
    }

    

    return (
        <div className="menu--container">
            {blogsJsx}
        </div>
    )
}