import axios, {AxiosStatic} from 'axios';


const baseURL = 'https://52b3-41-251-72-236.eu.ngrok.io';

const axiosInstance = axios.create({
    baseURL: baseURL,
    //timeout: 10000,
    headers: {
        accept: 'application/json',

    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            let port = window.location.port ? ':' + window.location.port : '';
            window.location.href = '//' + window.location.hostname + port + '/private';
        }

        // specific error handling done elsewhere
        //return Promise.reject(error);
    }
);

//itercep


export default axiosInstance;


//api/user 8090



