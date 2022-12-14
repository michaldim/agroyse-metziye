import '../css/Home.css'
import '../css/LocationAndTime.css'
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
import { useEffect, useContext } from 'react'
import { WhatsAppContext } from './context/WhatsAppContext'
import mediumMilkChurn from '../images/churn-medium.png'
import TextualInfoContainer from './TextualInfoContainer'



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


const Home = () => { 

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const {adminWhatsappLink} = useWhatsappLink()

    const { open, changeOpenStatus } = useContext(WhatsAppContext)  //this 'open' comes from WhatsAppContext.js and it controlls the whatsApp popUp inside this component

    const { scrollY } = useScroll()

    // When we scroll, the popUp will get closed:
    useEffect(() => {
        return scrollY.onChange(() => {
            changeOpenStatus(false)
        })
    }, [scrollY])


    //targets for whatsApp link:
    let target;
    //inView variants
    let percent;
    let bool;

    if (isDesktopOrLaptop) {
        target = "_blank";
        percent = 0.03;
        bool = true;
    } else {
        target = "_self";
        percent = 0;
        bool = false;
    }


    const [ref, inView ] = useInView({threshold: percent, triggerOnce: bool})


    return (  
        <div id='home-container'>
            {!isDesktopOrLaptop && <>
                <div id="windowImg-container">
                    <img id="windowImg" src={window} alt="?? ?????????????? ??????????"/>
                    <div id="gradientBackground"></div>
                </div>

                <p id="oldIsrael">???????? ???????????? ?????????????? ???? ?????? ???????????? ???????? ???? ?????? ?????????? ??????????!</p>
                
                <div id="kovesetImg-container">
                    <img id="kovesetGif" src={laundry} alt="??????????"/>
                    <div className="darkBackground"></div>
                    <motion.a href={`${adminWhatsappLink}`} className="ticketsButton" target={target} rel="noopener noreferrer"  variants={buttonVariants} animate='visible'>
                        <p>???????????? ??????????</p>
                    </motion.a>
                    <div id="drorWithElmet-container" ref={ref}>
                        <AnimationToSide inView={inView} src={drorWithElmet} id={"drorWithElmet"}  alt="???????? ??????????" startingPoint={'100vw'}/>
                    </div> 
                </div>

                <div id='textualInfo'>
                    <div id="interestingMuseum1-container"><p id="interestingMuseum1">?????????????? ???????????? ???????? ???? 2500 ?????????? ?????? ?????????? ????????????</p></div>
                    <div id="interestingMuseum2-container"><p id="interestingMuseum2">?????? ?????????? ????????????????, ?????????? ?????????????? ???????????? ?????????? ?????????????? ??????????????</p></div>
                </div>

                <WhoCanCome />
                <LocationAndTime />

            </>}

            {isDesktopOrLaptop && <>
                <div id="kovesetImg-container">
                    <div id='kovesetGifAsBackground'></div>
                    <div className="darkBackground"></div>
                    <motion.div className="ticketsButton" 
                        onClick={() => changeOpenStatus(true)}
                        variants={buttonVariants}
                        animate='visible'
                    >
                        <p>???????????? ??????????</p>
                    </motion.div>
                    <img id="whiteLogo" src={whiteLogo} alt="?? ?????????????? ??????????" />
                </div>

                <div id='textualInfo' ref={ref}>
                    <TextualInfoContainer />
                    <AnimationToSide inView={inView} src={mediumMilkChurn} id={"milkChurn"} alt="?????? ??????" startingPoint={'100vw'}/>
                </div>

                <LocationAndTime />
            </>}

            {open && <PopUp set={changeOpenStatus} sonId='connectUs-miniContainer'/>}

        </div>
    );
}
 
export default Home;