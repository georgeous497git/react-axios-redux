import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://<proyecto>.firebaseio.com/'

    /*
    ,auth: {
        username : '',
        password: ''
    }*/
});

export default instanceAxios;
