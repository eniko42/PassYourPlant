import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./PlantDetail.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class PlantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: {},
            comments: [],
            DataisLoaded: false
        }
    }

    componentDidMount() {
        let { id } = this.props.params;
        fetch(`/api/plants/${id}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    plant: json,
                });
            })
        fetch(`/api/plants/${id}/comments`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    comments: json,
                    DataisLoaded: true
                })
            })
    }
    render() {
        const { DataisLoaded, plant, comments } = this.state;
        if (DataisLoaded) {
            return (

                <div className="details">
                    <div className="detailsCard">
                        <h2 className="detailsName">{plant.plant_name}</h2>
                        <div className="row">
                            <div className="column">
                                <img className="detailsPicture" src={require("./logo192.png")} alt="nice plant"></img>
                            </div>
                            <div className="column">
                                <div className="texts">
                                    <p>From: {plant.user_name}</p>
                                    <p>Description: {plant.description}</p>
                                    <p>Location: {plant.location}</p>
                                    <p>Contact info: {plant.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="comments">
                            <h4>Comments</h4>
                        </div>
                    </div>
                    
                        {comments.map((comment, id) => (
                            <div className="detailsCard comments">
                            <p key={id} ><em>From {comment.user_name}</em> <span className="timeStamp">At: {comment.time_stamp}</span>
                                <br></br>{comment.message}</p>
                                </div>
                        ))}
                </div>
            );
        }
    }

}
export default withParams(PlantDetail)