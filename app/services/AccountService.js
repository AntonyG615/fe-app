import { useMemo } from "react";

function makeFormData(object) {
    const result = new FormData();
    object.entries().forEach(([key, value]) => {
        if (value !== undefined) {
            result.append(key, value);
        }
    })
    return result;
}

// const urlApi = 'http://localhost:4000';

export default function useAccountService() {

    // const api = useMemo(() => axios.create({
    //     baseURL: urlApi,
    //     timeout: 1000,
    // }), [urlApi]);

    // const urlApi = 'https://api.book-club.com:4000';

    // const login = useCallback((email, password) => api.post('account/login', makeFormData({ email, password }))
    // .then((response) => response.data !== 'CREDENTIAL MISS'), [api]);

    const login = useCallback((email, password) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === '' || password === '') {
                return resolve(false);
            }
            if (email === 'ciao@gmail.com' && password === 'password') {
                return resolve(true);
            }
            return resolve(false);
            // return reject(new Error('qualcosa è andato storto'));
        }, 500);
    }), []);

    return {

        login,

    };
}
