import axios from 'axios';

const API_URL = 'https://localhost:7269/api';

const registerUser = async (userName, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, { userName, password });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

const loginUser = async (userName, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, { userName, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

const adminRegister = async (userName, password) => {
    try {
        const response = await axios.post(`${API_URL}/admin/register`, { userName, password });
        return response.data;
    } catch (error) {
        console.error('Error registering admin:', error);
        throw error;
    }
};

const adminLogin = async (userName, password) => {
    try {
        const response = await axios.post(`${API_URL}/admin/login`, { userName, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in admin:', error);
        throw error;
    }
};

const getRegistrations = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/registrations`);
        return response.data;
    } catch (error) {
        console.error('Error getting registrations:', error);
        throw error;
    }
};

const approveUser = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/admin/approve`, { userId });
        return response.data;
    } catch (error) {
        console.error('Error approving user:', error);
        throw error;
    }
};

const declineUser = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/admin/decline`, { userId });
        return response.data;
    } catch (error) {
        console.error('Error declining user:', error);
        throw error;
    }
};

export { registerUser, loginUser, adminLogin, adminRegister, getRegistrations, approveUser, declineUser };
