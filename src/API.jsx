const apiUrl = 'https://us-central1-hogsnatcher-3e6c3.cloudfunctions.net/api';

class API {
    static postNewBass (newCatch) {
        console.log(newCatch);
            console.log(new Date(newCatch.date));
            console.log(new Date(newCatch.date).toLocaleDateString('en-US'));
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: " Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(newCatch)
        }
        return fetch(`${apiUrl}/bass`, options).then(async response => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                throw data;
            }
        })
    }
    
    static postNewSalmon (newCatch) {
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
        return fetch(`${apiUrl}/salmon`, options).then(async response => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                throw data;
            }
        })
    }
    
    static postNewWalleye (newCatch) {
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
        return fetch(`${apiUrl}/walleye`, options).then(async response => {
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                throw data;
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

    static getBass() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        return fetch(`${apiUrl}/bass`, options).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Response not ok');
            }
           
        })
        .catch((err) => {
            console.error('Error getting bass: ' + err);
        })
    }

    static getSalmon() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        return fetch(`${apiUrl}/salmon`, options).then(response => {
            return response.json();
        })
    }

    static getWalleye() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        return fetch(`${apiUrl}/walleye`, options).then(response => {
            return response.json();
        })
    }
}

export default API;