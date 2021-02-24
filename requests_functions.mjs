'use strict';

import axios from 'axios';


async function getUsers() {
    try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        console.log('Request for getting users');
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

async function login() {
    try {
        const response = await axios.post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        });
        console.log('Request for login');
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

async function register() {
    try{
        const response = await axios.post('https://reqres.in/api/register', {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        });
        console.log('Request for register');
        console.log(response);
    }
        catch (error){
            console.log(error);
        }
    }

export { getUsers, login, register };