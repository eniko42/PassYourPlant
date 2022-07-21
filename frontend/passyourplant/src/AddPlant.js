import React from "react"
import "./AddPlant.css"

class AddPlant extends React.Component{
    render(){
        return(
        <div>
            <h1>Upload a plant you want to give away</h1>
            <form className="detailsCard">
                <div className="formItem">
                    <label for="user_name">Your name: </label>
                    <input type="text" name="user_name" id="user_name" required></input>
                </div>
                <div className="formItem">
                    <label for="plant_name">Plant name: </label>
                    <input type="text" name="plant_name" id="plant_name" required></input>
                </div>
                <div className="formItem">
                    <label for="desc">Description: </label>
                    <input type="text" name="desc" id="desc"></input>  
                </div>
                <div className="formItem">
                    <label for="loc">Location: </label>             
                    <input type="text" name="loc" id="loc" required></input>
                </div>
                <div className="formItem">
                    <label for="contact">Contact info: </label>
                    <input type="text" name="contact" id="contact"></input>
                </div>                            
                
                <button className="submitButton" type="submit">Upload</button>     

            </form>

        </div>)
    }
}

export default AddPlant;