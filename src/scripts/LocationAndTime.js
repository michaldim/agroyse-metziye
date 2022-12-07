import '../css/LocationAndTime.css'
import milkChurn from '../images/churn-tiny.png'
import radio from '../images/radio-extraTiny.png'
import { useInView } from 'react-intersection-observer';
import AnimationToSide from './AnimationToSide';
import useWhatsappLink from '../hooks/useWhatsappLink';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react'
import { WhatsAppContext } from './context/WhatsAppContext'



const LocationAndTime = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1670px)' })

    let threshold;
    let triggerOnce;
    
    if (isDesktopOrLaptop) {
        threshold = 0;
        triggerOnce = true;
    } else {
        threshold = 0.1;
        triggerOnce = false;
    }


    const {ref, inView} = useInView({threshold, triggerOnce}) //{threshold} is the same as {threshold: threshold}
    const {adminWhatsappLink} = useWhatsappLink();
    const { changeOpenStatus } = useContext(WhatsAppContext)  //this 'open' comes from WhatsAppContext.js and it controlls the whatsApp popUp inside the home component

    
    return ( 
            <div id="locationAndTime-container" ref={ref}>
                    
                <div>
                    <p id="locationAndTime-header">
                        <span>כתובת ושעות פעילות</span>
                    </p>
                </div>
            
                <div id='details-container'>
                    <div id='writtenDetails-container'>
                        {!isBigScreen &&
                            <p className="details"><strong>כתובתנו</strong><br/>
                            רחוב הגיתות, קיבוץ יפעת.<br/></p>
                        }
                        {isBigScreen &&
                            <p className="details"><strong>כתובתנו</strong><br/>
                            רחוב הגיתות, קיבוץ יפעת.<br/>ניתן להגיע עם הרכב עד למחסום הממוקם בתחילת הרחוב מימין, ולאחר מכן יש לעלות רגלית במשך כדקה בכביש העולה מהמחסום.<br/></p>
                        }
                        <p className="details"><strong>שעות פעילות</strong><br/>
                        הפעילות מתקיימת בימים א'-ש' בין 21:00-9:00.<br/>
                        חובה לתאם את הביקור מראש באמצעות הווטסאפ.<br/></p>
                        
                        <div className="details">
                            {!isDesktopOrLaptop && <a href={`${adminWhatsappLink}`} className="tourLink"><strong>{`לתיאום סיור ${'>'}`}</strong></a>}
                            {isDesktopOrLaptop && <p className="tourLink" onClick={() => changeOpenStatus(true)}><strong>{`לתיאום סיור ${'>'}`}</strong></p>}
                        </div>
                    </div>   
                

                    {/* map iframe: */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.3432163153493!2d35.22821238500198!3d32.67691768100237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c52a57ccc18d9%3A0x65e605243c44259a!2z15Ag15LXqNeV15nXmdeh16Ig157XpteZ15DXlA!5e0!3m2!1siw!2sil!4v1662297142383!5m2!1siw!2sil" 
                        title="googleMap" width="90%" style={{border: "1px solid #7c3392"}} allowFullScreen="" loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                {!isDesktopOrLaptop && <AnimationToSide inView={inView} src={milkChurn} id={"milkChurn"} alt="מכל חלב" startingPoint={'100vw'}/>}
                {isDesktopOrLaptop && <AnimationToSide inView={inView} src={radio} id={"radio"} alt="רדיו" startingPoint={'-100vw'}/>}  {/* The radio's css is in WhoCanCome.css because the original #radio was in WhoCanCome.css */}


            </div>

    );
}
 
export default LocationAndTime;