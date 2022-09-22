import '../css/LocationAndTime.css'
import milkChurn from '../images/churn-tiny.png'
import { useInView } from 'react-intersection-observer';
import AnimationToSide from './AnimationToSide';

const LocationAndTime = () => {

    const {ref, inView} = useInView({threshold: 0.1})
    
    
    return (  
        <div id="locationAndTime-container" ref={ref}>
            <p id="locationAndTime-header">כתובת ושעות פעילות</p>
            <p className="details"><strong>כתובתנו</strong><br/>
            רחוב הגיתות, קיבוץ יפעת.<br/></p>
            <p className="details"><strong>שעות פעילות</strong><br/>
            הפעילות מתקיימת בימים א'-ש' בין 21:00-9:00.<br/>
            חובה לתאם את הביקור מראש באמצעות הווטסאפ.<br/></p>
            <div className="details">
                <a href="https://wa.me/qr/VHVL2VKJFFUOA1" className="tourLink"><strong>לתיאום סיור ></strong></a>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3432163153493!2d35.22821238500198!3d32.67691768100237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c52a57ccc18d9%3A0x65e605243c44259a!2z15Ag15LXqNeV15nXmdeh16Ig157XpteZ15DXlA!5e0!3m2!1siw!2sil!4v1662297142383!5m2!1siw!2sil" 
            title="googleMap" width="90%" style={{border: "1px solid #7c3392"}} allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            <AnimationToSide inView={inView} src={milkChurn} id={"milkChurn"} alt="מכל חלב" startingPoint={'100vw'}/>
        </div>
    );
}
 
export default LocationAndTime;