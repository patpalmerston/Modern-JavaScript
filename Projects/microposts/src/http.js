// fetch, es6 classes, promises, modern standards
/*
EasyHTTP Library
Library for making HTTP requests

@Version 3.0.0
@author Pat Palmerston

*/

class EasyHttP {
    // make http get request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // Make an HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an Http PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // http delete request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            header: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'resource deleted';
        return resData;
    }
}

export const http = new EasyHttP();
