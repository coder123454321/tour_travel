import "./RecentTripStyle.css"
import TripData from "./TripData";
import ram from "../assets/ram-temple.jpg"
import indo from "../assets/indonasia.jpg"
import malesiya from "../assets/malesia.jpg";
import React , {useState} from "react";
function Trip(){
       const[seeMore,setMore]=useState(0);
       const[changeName,setname]=useState("see More");
    return(
        <div className="Trip">
            <h1>Recent Trip</h1>
            <p>You Can discover unique destinations using Google Map</p>
<div className="tripcard">
       <TripData
       ram={ram} 
       title="Ram Temple, India"
       para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

       />




<TripData
       ram={indo} 
       title="Ram Temple, India"
       para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

       />



<TripData
       ram={indo} 
       title="Ram Temple, India"
       para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

       />





{/* <br />
<TripData
       ram={malesiya} 
       title="Ram Temple, India"
       para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

       /> */}


</div>
<div className="button">
        <button className="btn" onClick={()=>{setMore(!seeMore);setname("see lsee")}}>{changeName}</button>
    </div>
    {seeMore ?(
    <div className="hello">
    <TripData
    ram={malesiya} 
    title="Ram Temple, India"
    para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

    />



<TripData
    ram={malesiya} 
    title="Ram Temple, India"
    para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

    />




<TripData
    ram={malesiya} 
    title="Ram Temple, India"
    para="Ayodhya, town in northern India that is known as a sacred city and the birthplace of Rama in Hinduism and as a historical center of Buddhism. On a site significant to both Hindus and Muslims was a Mughal-era mosque, the Babri Masjid, which was destroyed in 1992 amid interreligious tensions."

    />
    </div>):
    (
       ""
    )
    }
        </div>


        
    )
}
export default Trip;