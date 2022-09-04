import React from "react"
import "../style/AddPlant.css"
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

export function Register(){

    const navigate = useNavigate();
    const [isError, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleClick(e) {
        e.preventDefault();
        const userName = document.getElementById("user_name").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const intro = document.getElementById("intro").value;


        const callback = fetchResult => {
            if (fetchResult.status === 200) {
                navigate('/');
            } else if (fetchResult.status === 406) {
                console.log(fetchResult)
                setError(true);
                setErrorMessage("Username already exist")
            }
        }

        fetch('/registration', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": userName,
                "password": password,
                "email": email,
                "introduction": intro,
                "role": "USER",

            })
        }).then(callback);

    }

    return (
        <div>
            <form className="addPlantCard">
                <h1>Registration</h1>
                <h3 style={isError ? {display:"block"} : {display: "none"}}>{errorMessage}</h3>
                <div className="formItem">
                    <label htmlFor="user_name">Your name: </label>
                    <input type="text" name="user_name" id="user_name" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required></input>
                </div>
                <div className="formItem">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email"></input>
                </div>
                <div className="formItem">
                    <label htmlFor="intro">Introduce yourself! </label>
                    <textarea name="intro" id="intro" maxLength={1000}></textarea>
                </div>

                <button onClick={handleClick} className="submitButton btn" type="submit">Register</button>

            </form>

        </div>)
}