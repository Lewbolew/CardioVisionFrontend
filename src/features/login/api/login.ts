import {Response} from '../../../api/interfaces';

export interface LoginData {
    email: string;
    password: string
}

export function login(data:LoginData) {
    return fetch('http://cardiovision.ai/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(async function (response) {
            const parsedResponse: Response = {
                response: await response.json(),
                ok: response.ok,
                status: response.status,
            };
            return parsedResponse;
        })
        .then(response => response)
        .catch(error => error);
}
