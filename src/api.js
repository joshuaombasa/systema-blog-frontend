export async function loginUser(formData) {
    const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText
        }
    }

    return data
}