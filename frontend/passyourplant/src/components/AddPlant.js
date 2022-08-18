import React from "react"
import "../style/AddPlant.css"
import {useNavigate} from 'react-router-dom';
import {AuthContext} from './AuthContext'
import {Forbidden} from './Forbidden'

export function AddPlant() {
    const navigate = useNavigate();
    const isLoggedIn = AuthContext.userIsAuthenticated();
    let user = null;
    if (isLoggedIn) {
        user = AuthContext.getUser()
    }

    function handleClick(e) {
        e.preventDefault();

        const userName = user.data.sub
        const plantName = document.getElementById("plant_name").value;
        const desc = document.getElementById("desc").value;
        const loc = document.getElementById("loc").value;
        const contact = document.getElementById("contact").value;
        const photo = document.getElementById("photo").value;

        const callback = fetchResult => {
            if (fetchResult.status === 200) {
                navigate('/');
            }
        }

        fetch('api/plants', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.accessToken
            },
            body: JSON.stringify({
                "user_name": userName,
                "plant_name": plantName,
                "description": desc,
                "photo": photo,
                "location": loc,
                "contact": contact,
                "available": true
            })
        }).then(callback);

    }

    if (!isLoggedIn) {
        return <div>
            <Forbidden></Forbidden>
        </div>
    } else {

        return (

            <div>
                <form className="addPlantCard">
                    <h1>Upload a plant you want to give away</h1>
                    <div className="formItem">
                        <label htmlFor="plant_name">Plant name: </label>
                        <input type="text" name="plant_name" id="plant_name" required></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="desc">Description: </label>
                        <input type="text" name="desc" id="desc"></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="loc">Location: </label>
                        <input type="text" name="loc" id="loc" required></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="contact">Contact info: </label>
                        <input type="text" name="contact" id="contact"></input>
                    </div>
                    <div className="formItem">
                        <label htmlFor="contact">Photo: </label>
                        <input type="text" name="photo" id="photo"></input>
                    </div>
                    <div className="formItem">
                        <button onClick={handleClick} className="submitButton btn" type="submit">Upload</button>
                    </div>
                </form>

            </div>)

    }
}