import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"
import Aboutimg from "../assets/back1.jpg"
import Footer from "../Components/Footer"
import RouterCss from "./Routes.css"
import v1 from "../assets/v1.svg"
import v2 from "../assets/v2.svg"
import v3 from "../assets/v3.svg"
import v4 from "../assets/v4.svg"
import v5 from "../assets/v5.svg"





function About() {
    return (
        <>
            <div className="about">
                <h1>About Us</h1>
                <div className="main">
                    <div className="left">
                        <img src={Aboutimg} alt="0"/>
                    </div> 
                    <div className="right">
                        <h2>Our philosophy</h2>
                    <p>Online tour travel has provided their customers to a new experience of hassle-free tours and sophisticated arrangement. We always cared our customers affection and for this we are doing distinct activities such as hotel room booking in best hotels of the destination, pick and drop facility from anywhere of cities and sight-seeing and excursion for beautiful locations and so on. Most importantly, customer should know about their exotic location, so that we are assisting them by a well superficial guide with depth knowledge of locations.
We are new in this field but our experienced professionals make us expert in this field with their magnificent skill and core information about travel destinations.
Online Tour Travel have tie-ups with some another travel agent across all over India and together we provide a good service to our customers. We have also good customer support for 24X7 for booking and enquiry.
We have some special type packages with outstanding exemption for our valuable customers.</p>
                    </div>


                </div>
            </div>

            <div className="values">
                <h1>Our values</h1>
                <p>We highly believe in a strong set of common values which guide our every day interactions and decision making with our colleauges, partners and clients.</p>
                <div className="content">
                    <div className="img1">
                        <img src={v1} alt="" />
                        <div className="h3"></div>
                        <h4>It is great to be open</h4>
                        <p>We value open feedback from every stakeholder and use it to improve our services.</p>
                    </div>
                    <div className="img1">
                        <img src={v2} alt="" />
                        <div className="h4"></div>
                        <h4>It is great to be open</h4>
                        <p>We value open feedback from every stakeholder and use it to improve our services.</p>
                    </div>
                    <div className="img1">
                        <img src={v3} alt="" />
                        <div className="h5"></div>
                        <h4>It is great to be open</h4>
                        <p>We value open feedback from every stakeholder and use it to improve our services.</p>
                    </div>
                    <div className="img1">
                        <img src={v4} alt="" />
                        <div className="h6"></div>
                        <h4>It is great to be open</h4>
                        <p>We value open feedback from every stakeholder and use it to improve our services.</p>
                    </div>
                    <div className="img1">
                        <img src={v5} alt="" />
                        <div className="h7"></div>
                        <h4>It is great to be open</h4>
                        <p>We value open feedback from every stakeholder and use it to improve our services.</p>
                    </div>
                </div>
            </div>


            
            <Navbar></Navbar>
            <Footer></Footer>

        </>
    )

}
export default About;