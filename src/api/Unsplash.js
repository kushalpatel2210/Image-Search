import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID PUT_AUTHORIZATION_KEY'
    }
});