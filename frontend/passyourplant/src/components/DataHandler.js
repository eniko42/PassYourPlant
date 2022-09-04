export const DataHandler = {
    login
}

function login(username, password) {
    return fetch('/login', {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
}
