import '../css/Home.css'
import window from '../images/window.png'
import laundry from '../images/gif/laundry.gif'
import drorWithElmet from '../images/drorWithElmet-extraTiny.png'
import { useInView } from "react-intersection-observer";
import WhoCanCome from './WhoCanCome'
import LocationAndTime from "./LocationAndTime";
import AnimationToSide from "./AnimationToSide";
import useWhatsappLink from '../hooks/useWhatsappLink';


const Home = () => {

    const [ref, inView ] = useInView()

    const {adminWhatsappLink} = useWhatsappLink();

    return (  
        <div>
            <div id="windowImg-container">
                <img id="windowImg" src={window} alt="א גרוייסע מציאה"/>
                <div id="gradientBackground"></div>
            </div>
            <p id="oldIsrael">בואו ליהנות משעתיים של מסע במנהרת הזמן אל ארץ ישראל הישנה!</p>
            <div id="kovesetImg-container">
                <img id="kovesetGif" src={laundry} alt="כובסת"/>
                <div id="darkBackground"></div>
                <a href={`${adminWhatsappLink}`} className="ticketsButton">
                    <p>לתיאום ביקור</p>
                </a>
                <div id="drorWithElmet-container" ref={ref}>
                    <AnimationToSide inView={inView} src={drorWithElmet} id={"drorWithElmet"}  alt="דרור החייל" startingPoint={'100vw'}/>
                </div>                
            </div>
            <p id="interestingMuseum1">מוזיאון חוויתי מרתק עם 2500 פריטי ארץ ישראל נדירים</p>
            <p id="interestingMuseum2">תשע תחנות משוחזרות, עשרות פעלולים טכניים והמון סיפורים משעשעים</p>
            <WhoCanCome />
            <LocationAndTime />
        </div>
    );
}
 
export default Home;