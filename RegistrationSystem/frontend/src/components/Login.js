import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Css/Login.css';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7269/api/user/login', { userName, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
                <p>
                    Not a user? <Link to="/register">Register</Link>
                </p>
                <p>
                    Admin? <Link to="/admin/login">Admin Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
