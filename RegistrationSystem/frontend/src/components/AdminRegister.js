import React, { useState } from 'react';
import { adminRegister } from '../services/apiService';
import { Link } from 'react-router-dom';
import '../Css/AdminRegister.css';

const AdminRegister = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await adminRegister(userName, password);
            setMessage('Admin registered successfully');
        } catch (error) {
            setMessage('Error registering admin');
        }
    };

    return (
        <div className="admin-register-container">
            <form className="admin-register-form" onSubmit={handleRegister}>
                <h2>Admin Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {message && <p>{message}</p>}
                <p>
                    Already have an account? <Link to="/admin/login" className="login-link">Login</Link>
                </p>
            </form>
        </div>
    );

};

export default AdminRegister;
