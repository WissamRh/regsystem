import React, { useState, useEffect } from 'react';
import { getRegistrations, approveUser, declineUser } from '../services/apiService';
import '../Css/AdminDashboard.css';

const AdminDashboard = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        const fetchRegistrations = async () => {
            const data = await getRegistrations();
            setRegistrations(data);
        };
        fetchRegistrations();
    }, []);

    const handleApprove = async (userId) => {
        await approveUser(userId);
        setRegistrations(registrations.filter(reg => reg.userId !== userId));
    };

    const handleDecline = async (userId) => {
        await declineUser(userId);
        setRegistrations(registrations.filter(reg => reg.userId !== userId));
    };

    return (
        <div className="admin-dashboard-container">
            <h2>Admin Dashboard</h2>
            <ul className="registration-list">
                {registrations.map(reg => (
                    <li key={reg.userId} className="registration-item">
                        <span>{reg.userName}</span>
                        <div className="actions">
                            <button className="approve-button" onClick={() => handleApprove(reg.userId)}>Approve</button>
                            <button className="decline-button" onClick={() => handleDecline(reg.userId)}>Decline</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
