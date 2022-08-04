import {useParams} from "react-router-dom";
import React from "react";
import "../style/PlantDetail.css"


function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>;
}


class PlantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: {},
            comments: [],
            DataisLoaded: false,
            plantId: 0,
        }
    }

    componentDidMount() {
        let {plantId} = this.props.params;
        this.setState({
            plantId: plantId,
        })
        const json = this.getPlantById(plantId);
        this.setState({
            plant: json,
        })
        this.getComments(plantId)
    }

    getPlantById(plantId) {
        fetch(`/api/plants/${plantId}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    plant: json,
                });
            })
    }


    getComments(plantId) {
        fetch(`/api/plants/${plantId}/comments`)
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

    handleUpdateCommentButton(commentId) {
        let updateElement = document.getElementById(commentId);
        updateElement.style.display = 'block';
    }

    updateComment(commentId, plantId, userName) {
        this.handleUpdateCommentButton(commentId);
        const message = document.getElementById(commentId + plantId).value;
        const data = {id: commentId, message: message, user_name: userName};

        fetch(`/api/plants/${plantId}/comments`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(function (response) {

                if (response.status === 200) {
                    console.log("successfully changed comment");

                }

            }).then(()=> this.getCommentsAndCloseMessageInput(plantId, commentId));

    }

    getCommentsAndCloseMessageInput(plantId, commentId){
        let updateElement = document.getElementById(commentId);
        updateElement.style.display = 'none';
        this.getComments(plantId);
    }

    handleClose() {
        document.getElementById("myForm").style.display = "none";
    }

    async submit(plantId) {
        this.handleClose()
        const message = document.getElementsByName('message')[0].value
        const userName = document.getElementsByName('user_name')[0].value
        const data = {message: message, user_name: userName}
        await fetch(`/api/plants/${plantId}/comments`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        this.getComments(plantId)
    }

    render() {
        const {DataisLoaded, plant, comments, plantId} = this.state;
        if (DataisLoaded) {
            return (

                <div className="details">
                    <div className="detailsCard">
                        <h2 className="detailsName">{plant.plant_name}</h2>
                        <div className="row">
                            <div className="column">
                                <img className="detailsPicture" src={require(`/src/images/${plant.photo}`)}
                                     alt="nice plant"/>
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
                            <h4>Comments <button className="btn" onClick={this.handleAddCommentButton}>Add new
                                Comment</button></h4>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="chat-popup" id="myForm">
                            <form className="form-container" onSubmit={(e) => {
                                e.preventDefault();
                                this.submit(plantId)
                            }}>
                                <h4>New Comment</h4>
                                <input placeholder="Type your name" name="user_name" required/>
                                <textarea placeholder="Type comment.." name="message" required/>
                                <button type="submit" className="send">Send</button>
                                <button type="button" className="cancel" onClick={this.handleClose}>Close</button>
                            </form>
                        </div>
                    </div>
                    {comments.map((comment, id) => (
                        <div className="detailsCard comments">
                            <p key={id}><em>From {comment.user_name}</em> <i className="fa-solid fa-pen-to-square"
                                                                             onClick={(e) => this.handleUpdateCommentButton(comment.id)}/>
                                <i className="fa fa-trash"/>
                                <br/>
                                <span >
                                    {comment.message}
                                </span>
                                <span id={comment.id} style={{display: "none"}}>
                                        <input id={comment.id + plantId} type="text" placeholder={comment.message}/>
                                        <button className="btn" onClick={(e) => this.updateComment(comment.id, plantId, comment.user_name)}>Update comment</button>
                                </span>
                            </p>
                            <span className="timeStamp">At: {comment.time_stamp}</span>
                        </div>
                    ))}

                </div>
            );
        }
    }

}

export default withParams(PlantDetail)