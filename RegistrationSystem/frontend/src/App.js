import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRegister from './components/AdminRegister';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <div>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/register" element={<AdminRegister />} />
                        <Route
                            path="/admin/dashboard"
                            element={
                                <PrivateRoute>
                                    <AdminDashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<div>Page Not Found</div>} />
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
};

export default App;
