import logo from './logo.svg';
import './Card.css';

export function Card(props) {
    return (
        <div className="plantcard">
            <p>{props.pic}</p>
            <div className="cardcontainer">
                <h4><b>{props.name}</b></h4>
            </div>
        </div>
    )
}