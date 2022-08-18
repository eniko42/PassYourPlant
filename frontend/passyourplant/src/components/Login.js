import React, {Component} from 'react'
import {Navigate} from 'react-router-dom'
import {AuthContext} from './AuthContext'
import {DataHandler} from './DataHandler'
import {parseJwt, handleLogError} from './Helpers'

class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggedIn: false,
        isError: false
    }

    componentDidMount() {
        const isLoggedIn = AuthContext.userIsAuthenticated()
        this.setState({isLoggedIn})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const username = document.getElementById("user_name").value;
        const password = document.getElementById("password").value;

        if (!(username && password)) {
            this.setState({isError: true})
            return
        }

        DataHandler.login(username, password)
            .then(response => {
                if (response.status === 200) {
                    const accessToken = response.headers.get("Authorization")
                    const data = parseJwt(accessToken)
                    const user = {data, accessToken}

                    AuthContext.userLogin(user)

                    this.setState({
                        username: '',
                        password: '',
                        isLoggedIn: true,
                        isError: false
                    })
                }
            })
            .catch(error => {
                handleLogError(error)
                this.setState({isError: true})
            })
    }


    render() {
        const {isLoggedIn, isError} = this.state
        if (isLoggedIn) {
            return <Navigate to={"/"}/>
        } else {
            return (
                <div>
                    <form className="addPlantCard">
                        <h1>Log in</h1>
                        <div className="formItem">
                            <label htmlFor="user_name">Your name: </label>
                            <input type="text" name="user_name" id="user_name" required></input>
                        </div>
                        <div className="formItem">
                            <label htmlFor="password">Your password: </label>
                            <input type="password" name="password" id="password" required></input>
                        </div>
                        <button onClick={this.handleSubmit} className="submitButton btn" type="submit">Login</button>

                    </form>
                </div>
            )
        }
    }
}

export default Login