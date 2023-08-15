import React from "react";
import Story from "../components/Story";

export default function Home() {

    const [blogsData, setBlogsData] = React.useState(null)

    React.useEffect(() => {
        fetch('http://localhost:3000/blogs', {
            method: 'GET',
            headers: {
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBlogsData(data)
        })
    }, [])

    let blogsJsx  
    if (blogsData) {
        blogsJsx = blogsData.map(blog => (
            <Story key={blog.id} blog={blog}/>
        ))
    }
    

    return (
            <div className="home--container">
              {blogsJsx}
            </div>
    )
}