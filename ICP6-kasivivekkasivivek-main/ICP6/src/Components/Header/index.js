import {Link} from "react-router-dom"
import {Component} from "react"
import "./index.css"

class Header extends Component{

    render(){
        
        return(
            <div className="header_main_container">
                <div className="logo_container">
                    <img className="logo_image" src="https://i.pinimg.com/originals/fe/50/40/fe5040ef6eb50e18c24f937bc43916a0.jpg" alt="logo-pic" />
                </div>
                <ul className="header_unordered_list">
                    <li className="header_list_item">
                        <Link className="header_link" to="/">Home</Link>
                    </li>
                    <li className="header_list_item">
                        <Link className="header_link" to="/recipi">Recipi Finder</Link>
                    </li>
                    <li className="header_list_item">
                        <Link className="header_link" to="resturant-finder">Resturant Finder</Link>
                    </li>
                </ul>
            </div>
        )
    }
 }

 export default Header
