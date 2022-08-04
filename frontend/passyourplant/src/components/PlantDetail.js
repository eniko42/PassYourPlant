import {useParams} from "react-router-dom";
import React from "react";
import "../style/PlantDetail.css"
import { useNavigate } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} navigation={useNavigate()} />;
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
        let { plantId } = this.props.params;
        const navigation  = this.props.navigation;
        this.setState({
            plantId: plantId,
        })
        this.getPlantById(id);
        this.getComments(id)
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

    handleUpdateCommentButton(commentId, userName) {
        let updateElement = document.getElementById(commentId);
        updateElement.style.display = 'block';
        let originalComment = document.getElementById(commentId + userName);
        originalComment.style.display = 'none';
    }

    updateComment(commentId, plantId, userName) {
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

            }).then(()=> this.getCommentsAndCloseMessageInput(plantId, commentId, userName));

    }

    getCommentsAndCloseMessageInput(plantId, commentId, userName){
        let updateElement = document.getElementById(commentId);
        updateElement.style.display = 'none';
        let originalComment = document.getElementById(commentId + userName);
        originalComment.style.display = 'block';
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

    async deleteEntity(id, url) {
        await fetch(url,
            {
                method: "DELETE"
            })
    }

    render() {
        const {DataisLoaded, plant, comments, plantId} = this.state;
        const navigation = this.props.navigation;
        if (DataisLoaded) {
            return (

                <div className="details">
                    <div className="detailsCard">
                        <h2 className="detailsName">{plant.plant_name} <i className="fa-solid fa-pen-to-square"/> <i className="fa fa-trash" onClick={() => {this.deleteEntity(id, `/api/plants/${id}`).then(navigation("/")); }}/> </h2>
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
                    {comments.map((comment, commentId) => (
                        <div className="detailsCard comments">
                            <p key={commentId} ><em>From {comment.user_name}</em> <i onClick={(e) => this.handleUpdateCommentButton(comment.id, comment.user_name)} className="fa-solid fa-pen-to-square"/>
                                <i className="fa fa-trash" onClick={()=> {this.deleteEntity(id, `/api/plants/comments/${comment.id}`);this.getComments(id)}}/>
                                <br/>
                                <span id={comment.id + comment.user_name}>
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