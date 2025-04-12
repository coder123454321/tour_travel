import "./RecentTripStyle.css"
import ram from "../assets/ram-temple.jpg"
import indo from "../assets/indonasia.jpg"
import malesiya from "../assets/malesia.jpg"

function TripData(props) {
    return(
        <>
        <div className="tripData">
            <div className="t-img">
                <img src={props.ram} alt="" />
            </div>
                <h3>{props.title}</h3>
                <p>{props.para}</p>



        </div>

        
        </>
    )
    
}
export default  TripData;