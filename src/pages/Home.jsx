import React from "react";
import Story from "../components/Story";

export default function Home() {

    const [blogsData, setBlogsData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/blogs')
        .then(res => res.json())
        .then(data => {
           
            setBlogsData(data)
        })
        .catch(error => console.log(error))
        .finally(setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="home--container">
                <h1>Loading...</h1>
            </div>
        )
    }

    let blogsJsx  
    if (blogsData) {
        blogsJsx = blogsData.map(blog => (
            <Story key={blog.id} blog={blog}/>
        ))
    }
    
    console.log(blogsData)

    return (
            <div className="home--container">
              {blogsData && blogsJsx}
            </div>
    )
}

// {
//     method: 'GET',
//     headers: {
//         'Authorization' : localStorage.getItem('token')
//     }
// }