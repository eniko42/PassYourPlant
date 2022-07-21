import React from "react"
import "./AddPlant.css"

class AddPlant extends React.Component{


handleClick(){
    const userName = document.getElementById("user_name").value;
    const plantName = document.getElementById("plant_name").value;
    const desc = document.getElementById("desc").value;
    const loc = document.getElementById("loc").value;
    const contact = document.getElementById("contact").value;
    console.log(userName);
    fetch('api/plants', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "user_name": userName,
            "plant_name": plantName,
            "description": desc,
            "photo": "test_plant.jpg",
            "location": loc,
            "contact": contact,
            "available": true    
           })
    })
}

    render(){
        return(
        <div>
            
            <form className="addPlantCard">
            <h1>Upload a plant you want to give away</h1>
                <div className="formItem">
                    <label htmlFor="user_name">Your name: </label>
                    <input type="text" name="user_name" id="user_name" required></input>
                </div>
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
                
                <button onClick={this.handleClick} className="submitButton btn" type="submit">Upload</button>     

            </form>

        </div>)
    }
}

export default AddPlant;