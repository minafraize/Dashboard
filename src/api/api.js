import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://demo9224623.mockable.io/'
});

export default instance;