import axios from 'axios';
import type { UserListResponse } from '../interfaces/reqres.response';


export const loadUsersAction = async (page: number) => {

    try {
        const { data } = await axios.get<UserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            },
            headers: {
                'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
            },
        });

        console.log(data.data);
        return data.data;

    } catch (error) {
        console.error(error);
        return [];
    }

};