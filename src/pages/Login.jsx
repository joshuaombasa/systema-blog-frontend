import React from "react";
import { json } from "react-router-dom";

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    })

    function handleChange(event) {
        const { name, value} = event.target

        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name] : value
            }
        ))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            localStorage.setItem("token" , data.token)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="login--container">
            <form onSubmit={handleSubmit} className="login--form form">
                <label htmlFor="">Email:</label>
                <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required
                />
                <label htmlFor="password">Password</label>
                <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required
                />
                <button>Submit</button>
            </form>
        </div>
    )
}