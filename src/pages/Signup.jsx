import React from "react";

export default function Signup() {

    const [formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name]: value
            }
        ))
    }

   
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };

    return (
        <div className="signup--container">
            <form onSubmit={handleSubmit} className="signup--form form">
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="lastname">Lastname:</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
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