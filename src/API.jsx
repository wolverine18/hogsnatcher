const apiUrl = 'https://us-central1-hogsnatcher-3e6c3.cloudfunctions.net/api';

class API {
    static postNewCatch (newCatch) {
        console.log(newCatch);
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: " Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgzYTczOGUyMWI5MWNlMjRmNDM0ODBmZTZmZWU0MjU4Yzg0ZGI0YzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG9nc25hdGNoZXItM2U2YzMiLCJhdWQiOiJob2dzbmF0Y2hlci0zZTZjMyIsImF1dGhfdGltZSI6MTU4NjAyNTIwNywidXNlcl9pZCI6ImViZlpZSHJoczlYa3l2YTFNR2RoMGVna0xsazIiLCJzdWIiOiJlYmZaWUhyaHM5WGt5dmExTUdkaDBlZ2tMbGsyIiwiaWF0IjoxNTg2MDI1MjA3LCJleHAiOjE1ODYwMjg4MDcsImVtYWlsIjoiamF5QGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqYXlAZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Hr6TEjGZPdn-AaZ-eBzBwxnAKAyXShmgsFJZeentkEOU512hcUUOduW55dlLfhe04wkyy8iCuL6dAXk4QOCay7H17g3vOApnl9bCcAi3VX6Ltz9j8g_RZxfUWJJBAKhHU6xArcyQwiYQeNGeMHBAIoajUnpSiuUXMbtcTL3Wcxx5PURDWBB8vD9wr_PeoLNX9-F91AJZpqHH_XrZnyD25Hm5kxS2sX16mEeJPXjGVdTjPtbPueNcy7lw0T_zuzRMH85JlBFpD7uf-0DH8krHm6Hc_MjCha8lVhi1QCdiBteERihGtJa2jr22KOtp3lnWz3cSEby6UpKqg4kMFQMs2Q"
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
}

export default API;