import Navbar  from "../Components/Navbar";
import Hero from "../Components/Hero"
import Desination from "../Components/Destinantion"
import Trip from "../Components/RecantTrip";
import Footer from "../Components/Footer"
import {MenuItem} from "../Components/Menubar"
// import { Component } from "react";
function Home(){
    return(
        <>
        <Hero
        cname="hero"
        image="https://cdn.pixabay.com/photo/2017/02/18/18/43/motorcycle-2077914_1280.jpg"
        hello1="hello1"
        headding_hero="Your Jorny Is Your Story"
        paragragh="Choose Your Fevriote Destination"
        text="Travel List"
        url="/blog/src/Routes/TravelList.js"
        ClassName="heroclass"
        />
        <Navbar></Navbar>
        <Desination></Desination>
        <Trip></Trip>
        <Footer></Footer>
        </>
    )
    
}
export default Home;