import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

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
            const data = await loginUser(formData)
            console.log(data)
            localStorage.setItem("token" , data.token)
            navigate("/write")
        } catch(error) {
            setError(error)
            console.log(error)
        }
    }

    return (
        <div className="login--container">
            {error && <h2 style={{color: "red"}}>{error.message}</h2>}
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