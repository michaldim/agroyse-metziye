import '../css/Home.css'
import window from '../images/window.png'
import laundry from '../images/gif/laundry.gif'
import whiteLogo from '../images/whiteLogo.png'
import drorWithElmet from '../images/drorWithElmet-extraTiny.png'
import { useInView } from "react-intersection-observer";
import WhoCanCome from './WhoCanCome'
import LocationAndTime from "./LocationAndTime";
import AnimationToSide from "./AnimationToSide";
import useWhatsappLink from '../hooks/useWhatsappLink';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll } from "framer-motion";
import PopUp from './PopUp'
import { useEffect } from 'react'


const buttonVariants = {
    visible: {
        scale: [1, 0.8, 1, 0.8, 1],
        opacity: [1, 0.7, 1, 0.7, 1],
        transition: {
            delay: 2,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4.5
        }
    }
}


const Home = ({open, setOpen}) => { //These props come from AnimatedRoutes.js

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const [ref, inView ] = useInView()

    const {adminWhatsappLink} = useWhatsappLink()

    const { scrollY } = useScroll()

    // When we scroll, the popUp will get closed
    useEffect(() => {
        return scrollY.onChange(() => {
            setOpen(false)
        })
    }, [scrollY])

    //targets for whatsApp link:
    let target;

    if (isDesktopOrLaptop) {
        target = "_blank";
    } else {
        target = "_self";
    }


    return (  
        <div id='home-container'>
            <div id="windowImg-container">
                {!isDesktopOrLaptop && <img id="windowImg" src={window} alt="א גרוייסע מציאה"/>}
                {isDesktopOrLaptop && <img id="windowImg" src={window} alt="א גרוייסע מציאה"/>}
                <div id="gradientBackground"></div>
            </div>

            {!isDesktopOrLaptop && <p id="oldIsrael">בואו ליהנות משעתיים של מסע במנהרת הזמן אל ארץ ישראל הישנה!</p>}

            <div id="kovesetImg-container">
                {!isDesktopOrLaptop && <img id="kovesetGif" src={laundry} alt="כובסת"/>}
                {isDesktopOrLaptop && <div id='kovesetGifAsBackground'></div>}
                <div className="darkBackground"></div>
                {!isDesktopOrLaptop && (
                <a href={`${adminWhatsappLink}`} className="ticketsButton" target={target} rel="noopener noreferrer">
                    <p>לתיאום ביקור</p>
                </a>
                )}
                {isDesktopOrLaptop && (
                    <motion.div className="ticketsButton" 
                        onClick={() => setOpen(true)}
                        variants={buttonVariants}
                        animate='visible'
                    >
                        <p>לתיאום ביקור</p>
                    </motion.div>
                )}

                {open && <PopUp set={setOpen} sonId='connectUs-miniContainer'/>}

                {isDesktopOrLaptop && <img id="whiteLogo" src={whiteLogo} alt="א גרוייסע מציאה"/>}
                {!isDesktopOrLaptop &&
                <div id="drorWithElmet-container" ref={ref}>
                    <AnimationToSide inView={inView} src={drorWithElmet} id={"drorWithElmet"}  alt="דרור החייל" startingPoint={'100vw'}/>
                </div>  
                }              
            </div>

            <div id='textualInfo-container'>
                {isDesktopOrLaptop && <p id="oldIsrael">בואו ליהנות משעתיים של מסע במנהרת הזמן אל ארץ ישראל הישנה!</p>}
                <p id="interestingMuseum1">מוזיאון חוויתי מרתק עם 2500 פריטי ארץ ישראל נדירים</p>
                <p id="interestingMuseum2">תשע תחנות משוחזרות, עשרות פעלולים טכניים והמון סיפורים משעשעים</p>
            </div>

            <WhoCanCome />
            <LocationAndTime />
        </div>
    );
}
 
export default Home;