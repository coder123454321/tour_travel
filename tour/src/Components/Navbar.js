import { Component } from "react";
import css from "./Navbar.css";
import {MenuItem} from "./Menubar"

import {Link} from "react-router-dom"
class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        clicked:false,
    }
  }
  
  handleClicke=()=>{
    this.setState({clicked:!this.state.cliked});
  }
  
  render(){
    return(
      <nav className="navbarItem">
        <h1 className="navbar-logo"><span><b><span>T</span></b>ravel</span>-<b>G</b>o</h1>
        <div className="menu-icon"onClick={this.handleClicke}>
        <i className={this.state.clicked ?"fas fa-times":
        "fas fa-bars"}></i>
        {/* <i class="fa-solid fa-xmark"></i> */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
          {MenuItem.map((item,index)=>{
            return(
              <li>
            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
            {/* <Link className="nav-links-mobiles"></Link> */}
          </li>
            )
          })}
         <li>
         {/* <button className="btn primary-ptn">Sign Up</button> */}
         </li>
          

        </ul>

      </nav>
    );
  }
}
export default Navbar;

