import { endPoint } from './appKey.js';

const makeHeaders = (headers) => {
    const finalHeaders = {};
    for (const header of ['Content-Type', 'x-user-token']) {
        if (headers[header]) {
            finalHeaders[header] = headers[header];
        }
        finalHeaders['Content-Type'] = headers['Content-Type'] || 'application/json';
        return finalHeaders;
    }
}

const commonFetch = (url, options) => {
    const headers = makeHeaders(options.headers);
    const request = {
        method: options.method || 'GET',
        headers: headers
    };
    if (options.body) {
        request.body = options.body;
    }
    return fetch(url, request)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .then((error) => Promise.reject(error));
        }).catch((error) => error);
}

export const getList = ({token}) => {
    const url = `${endPoint}/list`;
    return commonFetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'x-user-token': token}
    });
}

export const getInfo = ({id}) => {
    const url = `${endPoint}/detail/${id}`;
    return commonFetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
}