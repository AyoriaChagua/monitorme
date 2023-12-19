import { Role } from '@/interfaces/AuthInterfaces';
import { roleService } from '@/services/auth-service';
import { useEffect, useState } from 'react'

export const useRole = () => {

    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await roleService();
            if (response) {
                const roleName = response.map(role => role);
                setRoles(roleName);
            }
        }
        fetchData();
    }, []);

    return roles
}