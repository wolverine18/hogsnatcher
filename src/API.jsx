const apiUrl = 'https://us-central1-hogsnatcher-3e6c3.cloudfunctions.net/api';

class API {
    static postNewCatch (newCatch) {
        console.log(newCatch);
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: " Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(newCatch)
        }
        return fetch(`${apiUrl}/catch`, options).then(async response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 422) {
                console.error("Failed")
            }
        })
    }

    static login (newLogin) {
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(newLogin)
        }
        return fetch(`${apiUrl}/login`, options).then(async response => {
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                throw new Error(data.general);
            }
        })
    }

    static getCatches() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        return fetch(`${proxyurl}${apiUrl}/catches`, options).then(response => {
            return response.json();
        })
    }
}

export default API;