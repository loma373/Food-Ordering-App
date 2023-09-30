import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Signup() {
    const [cred, setCred] = useState({name: "", email: "", password: "", geolocation: ""})
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = axios.post("http://localhost:5000/api/adduser",{
            name: cred.name,
            email: cred.email,
            password:  cred.password,
            geolocation: cred.geolocation
        })
    }

    const handleChange = (e) =>{
        setCred({... cred, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={cred.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={cred.email} onChange={handleChange}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="Password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={cred.password} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="location" className="form-label">location</label>
                        <input type="text" className="form-control" name="geolocation" value={cred.geolocation} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>

        </div>
    )
}
