export const AuthContext = {
    getUser,
    userIsAuthenticated,
    userLogout,
    userLogin
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}


function userIsAuthenticated() {
    let user = localStorage.getItem('user')
    if (!user) {
        return false
    }
    user = JSON.parse(user)
    // if user has token expired, logout user
    if (Date.now() > user.data.exp * 1000) {
        this.userLogout()
        return false
    }
    return true
}

function userLogin(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

function userLogout() {
    localStorage.removeItem('user')
}

