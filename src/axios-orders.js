import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2423c.firebaseio.com/'
});

export default instance;