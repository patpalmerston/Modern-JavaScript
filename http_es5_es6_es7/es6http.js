// fetch, es6 classes, promises, modern standards
/*
EasyHTTP Library
Library for making HTTP requests

@Version 2.0.0
@author Pat Palmerston

*/

class EasyHttP {
    // make http get request
    get(url) {
        return new Promise((res, rej) => {
            fetch(url)
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });
    }
    // Make an HTTP POST Request
    post(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });
    }

    // Make an Http PUT request
    put(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'PUT',
                header: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });
    }

    // http delete request
    delete(url) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'DELETE',
                header: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(() => res('Deleted'))
                .catch(err => rej(err));
        });
    }
}
