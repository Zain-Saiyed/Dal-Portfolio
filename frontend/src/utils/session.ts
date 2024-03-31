import { GET } from "./axios";

export const fetchSession = async () => {
    const response = await GET('/api/user/session');
    return response.data;
}