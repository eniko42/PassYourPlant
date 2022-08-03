import { useParams } from "react-router-dom";
import React from "react";
import "../style/PlantDetail.css"


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class PlantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: {},
            comments: [],
            DataisLoaded: false,
            id: 0,
        }
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.setState({
            id: id,
        })
        const json = this.getPlantById(id);
        this.setState({
            plant: json,
        })
        this.getComments(id)
    }

    getPlantById(id) {
        fetch(`/api/plants/${id}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    plant: json,
                });
            })
    }

 

    getComments(id) {
        fetch(`/api/plants/${id}/comments`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    comments: json,
                    DataisLoaded: true
                })
            })
    }

    handleAddCommentButton() {
        document.getElementById("myForm").style.display = "block";
    }

    handleClose() {
        document.getElementById("myForm").style.display = "none";
    }

    async submit(id) {
        this.handleClose()
        const message = document.getElementsByName('message')[0].value
        const userName = document.getElementsByName('user_name')[0].value
        const data = {message: message, user_name: userName}
        await fetch(`/api/plants/${id}/comments`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
        this.getComments(id)
    }

    render() {
        const { DataisLoaded, plant, comments, id} = this.state;
        if (DataisLoaded) {
            return (

                <div className="details">
                    <div className="detailsCard">
                        <h2 className="detailsName">{plant.plant_name}</h2>
                        <div className="row">
                            <div className="column">
                                <img className="detailsPicture" src={require(`/src/images/${plant.photo}`)}  alt="nice plant"/>
                            </div>
                            <div className="column">
                                <div className="texts">
                                    <p>From: {plant.user_name}</p>
                                    <p>Description: {plant.description}</p>
                                    <p>Location: {plant.location}</p>
                                    <p>Contact info: {plant.contact}</p>
                                    <p>Photo: {plant.photo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="comments">
                            <h4>Comments <button className="btn" onClick={this.handleAddCommentButton}>Add new Comment</button></h4>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="chat-popup" id="myForm">
                            <form className="form-container" onSubmit={(e)=> {e.preventDefault();this.submit(id)}}>
                                <h4 >New Comment</h4>
                                <input placeholder="Type your name" name="user_name" required/>
                                <textarea placeholder="Type comment.." name="message" required/>
                                <button type="submit" className="send" >Send</button>
                                <button type="button" className="cancel" onClick={this.handleClose}>Close</button>
                            </form>
                        </div>
                    </div>
                    {comments.map((comment, id) => (
                        <div className="detailsCard comments">
                            <p key={id} ><em>From {comment.user_name}</em> <i className="fa-solid fa-pen-to-square"/> <i className="fa fa-trash" />
                                <br/>{comment.message}</p>
                            <span className="timeStamp">At: {comment.time_stamp}</span>
                        </div>
                    ))}

                </div>
            );
        }
    }

}
export default withParams(PlantDetail)