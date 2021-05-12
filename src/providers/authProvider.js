import Axios from "axios";
// import { stringify } from "querystring";

const authProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {

        let email = username;
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return Axios.post('http://localhost:8080/api/login', formData, config)
        .then((response) => {
            if(response.status === 200){
                console.log(response);
                localStorage.setItem('auth', JSON.stringify(response.data.data));
                localStorage.setItem('token', response.data.token);
                return Promise.resolve();
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        // const request = new Request('http://localhost:8080/api/login', {
        //     mode: 'no-cors',
        //     method: 'POST',
        //     withCredentials: true,
        //     body: formData,
        //     headers: new Headers({ 'Content-Type': 'multipart/form-data' }),
        // });
        // return fetch(request)
        //     .then(response => {
        //         console.log(response);
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(auth => {
        //         // localStorage.setItem('auth', JSON.stringify(auth));
        //         localStorage.setItem('email', email);
        //     })
        //     .catch(() => {
        //         throw new Error('Network error');
        //     });

        // accept all username/password combinations
        // return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();

    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;