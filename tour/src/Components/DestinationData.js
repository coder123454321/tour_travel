import {} from "../Components/Destinantion"
import kashi1 from "../assets/kashi1.avif"
import kashi2 from "../assets/kashi2.jpg"
import React, { Component } from 'react'
class Destination extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render(){
        return(
            <div className={this.props.cName}>
            <div className="des-text">
                <h2>{this.props.H2Headding}</h2>
                <p>{this.props.paragraph}</p>
            </div>
            <div className="image">
                <img src={this.props.img2} alt="1" />
                <img src={this.props.img1} alt="2" />
            </div>
        </div>
        )
    }

}
export default  Destination;
