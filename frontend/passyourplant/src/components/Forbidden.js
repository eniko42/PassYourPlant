import {Link} from 'react-router-dom'

export function Forbidden() {
    return (<div className="addPlantCard">
        <h1>
            If you want to use this function please log in
        </h1>
        <Link to={"/login"}>Login</Link>
    </div>);
}