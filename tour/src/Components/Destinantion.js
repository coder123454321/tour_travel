import { } from "./destination.css"
import kashi1 from "../assets/kashi1.avif"
import kashi2 from "../assets/kashi2.jpg"
import mt1 from "../assets/mt1.jpg"
import mt2 from "../assets/mt2.jpg"
import Destination from "../Components/DestinationData"
const destination = (props) => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>World's Best Places to Visit for 2023-2024 </p>
            <Destination
            cName="first-de"
                H2Headding="Shri Kashi Vishwanath Temple."
                paragraph="Kashi Vishvanath Temple is one of the most famous Hindu
            temples dedicated to Lord
            Shiva. It is located in Varanasi, 
            Uttar Pradesh, India. The temple stands on the western bank of the holy river 
            Ganga, and is one of the twelve
            Jyotirlingas, the holiest of Shivatemples."
                img1={kashi1}
                img2={kashi2}
            />

            {/* for the second section */}

            <Destination
            cName="first-de-2nd"
                H2Headding="Mt. Daguldol Batangas"
                paragraph="Daguldol provides great views overlooking the nearby beach, lush woodlands, rolling slopes, and nearby mountains. The view at the summit is the best as you can experience both the sea and the mountains."
                img1={mt1}
                img2={mt2}
            />
        </div>
    )
}
export default destination;