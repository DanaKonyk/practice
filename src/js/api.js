import axios from 'axios';
import { LS_KEY } from './helpers';

const token = localStorage.getItem(LS_KEY);


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
axios.defaults.headers.common.Authorization = `Bearer ${token}`

export async function onUserServiceAdd(user) {
    try {
        const { data } = await axios.post('/users/signup', user);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function onUserServiceLogin(user) {
    try {
        const { data } = await axios.post('/users/login', user);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function onContactServiceAdd(contact) {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}


export async function onContactServiceGet() {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function onContactServiceDelete(contactId) {
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function onUserServiceLogout() {
    try {
        const { data } = await axios.post('/users/logout');
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
