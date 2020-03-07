
export interface RegisterData {
    email: string;
    username: string;
    password1: string;
    password2: string;
}

export interface Response {
    status: number;
    ok: boolean;
    response: any;
}

export function register(data:RegisterData) {
    // Значения по умолчанию обозначены знаком *
    return fetch('http://cardiovision.ai/api/registration/', {
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
