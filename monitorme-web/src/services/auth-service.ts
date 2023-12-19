import { Role } from '@/interfaces/AuthInterfaces';
import axios from 'axios'

export const roleService = async () => {
    try {
        const configObject = {
            method: 'GET',
            url: '/api/auth/role'
        }
        const response = await axios<Role[]>(configObject);
        if (response.data)
            return response.data;
        else
            return null;
    } catch (error) {
        console.error(error);
        throw error
    }
}