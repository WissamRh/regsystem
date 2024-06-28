import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { adminLogin } from '../services/apiService';
import '../Css/AdminLogin.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await adminLogin(userName, password);
            login(); // Update the authentication state
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div className="admin-login-container">
            <form className="admin-login-form" onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
                <p>
                    Not an admin? <Link to="/admin/register" className="register-link">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default AdminLogin;
