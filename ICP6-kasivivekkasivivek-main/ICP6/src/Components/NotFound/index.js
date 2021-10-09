

import {Component} from "react"
import "./index.css"

class NotFound extends Component{

    render(){

        const name = "Page Not Found";

        return(
            <div className="notfound_container">
                <h1>{name}</h1>
            </div>
        )
    }
}

export default NotFound;