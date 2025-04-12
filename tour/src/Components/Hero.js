import "./HeroStyle.css"
import {Link} from "react-router-dom"
import {MenuItem} from "./Menubar"
function Home(props){
    return(
        <>
        <div className={props.cname}>
            <img src={props.image} alt="0" className={props.hello1} />
        
        <div className="hero-text">
            <h1>{props.headding_hero}</h1>
            <p>{props.paragragh}</p>
            
            <Link to={props.url} className={props.ClassName }>{props.text}</Link>
        </div>
        </div>

        </>
    )

}
export default Home;