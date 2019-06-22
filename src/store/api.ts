import axios from 'axios'
import { UserSubmit, UserResponse, User } from './models';

export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
})

export function setJWT(jwt: string): void {
    conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`
}

export function clearJWT() {
    delete conduitApi.defaults.headers.common['Authorization']
}

export async function loginUser(user: UserSubmit): Promise<User> {
    const response = await conduitApi.post('/users/login', { user })
    return (response.data as UserResponse).user;
}