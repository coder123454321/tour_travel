import Navbar  from "../Components/Navbar";
import Hero from "../Components/Hero"
import Aboutimg from "../assets/ser.jpg" 
import Footer from "../Components/Footer"
import ram from "../assets/ram-temple.jpg"
import indo from "../assets/indonasia.jpg"
import malesiya from "../assets/malesia.jpg"
import TripData from "../Components/RecantTrip";
 

function About(){
    return(
        <>
         <Hero
        cname="heroabout"
        image={Aboutimg}
        hello1="hello2"
        headding_hero="Destinations"
        paragragh="Choose Your Fevriote Destination"
        ClassName="hero"
        />

        <TripData></TripData>
        <Navbar></Navbar>

        <Footer></Footer>
        </>
    )

}
export default About;