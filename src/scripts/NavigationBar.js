import { useNavigate } from 'react-router-dom';
import '../css/NavigationBar.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ClosingXSVG from './SVGs/ClosingXSVG';


const logoAnimationVariants = {
    hover: {
        scale: [1, 1.15, 1, 1.15, 1],
        transition: {
            duration: 1.2
        }
    }
}



const NavigationBar = ({info, setInfo}) => {    // The prop comes from AnimatedRoutes.js

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const navigate = useNavigate();

    let variants;
    let whileHover;

    if (isDesktopOrLaptop) {
        variants= logoAnimationVariants;
        whileHover='hover';
    } else {
        variants = {};
        whileHover='';
    }


    const changeRoute = (location) => {
        navigate(location);
        setInfo(false);
        window.scrollTo(0, 0);
    }


    return ( 
        <div>
            <div id="navBar-container" onClick={() => setInfo(true)}>
                {/* the hamburger sign */}
                {!info && (
                    <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#FFFFE0"/>
                        <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#FFFFE0"/>
                        <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#FFFFE0"/>
                    </svg> 
                )}
            </div>

            
            <AnimatePresence>  {/* AnimatePresence let us use exit in our animation */}
                {(info && !isDesktopOrLaptop) && (
                    <motion.div 
                        initial={{y: '-100vh'}} 
                        animate={{y: 0}} 
                        exit={{y: '-100vh', transition: {duration: 0.75}}}
                        transition={{duration: 0.3, type: "tween", ease: "easeInOut"}} 
                        id="info-container"
                    >
                        
                        {/* the closing X */}
                        <div onClick={() => setInfo(false)}>
                            <ClosingXSVG size='30px' color="#FFFFE0"/>
                        </div>
                        
                        <p onClick={() => changeRoute('/')}>עמוד הבית</p>
                        <p onClick={() => changeRoute('/gallery')}>גלריה</p>
                        <p onClick={() => changeRoute('/questions')}>שאלות ותשובות</p>
                        <p onClick={() => changeRoute('/admin')}>כניסה למערכת</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {isDesktopOrLaptop && (
                <div id="navBar-LaptopAndDesktopContainer">
                    <motion.p onClick={() => changeRoute('/')} variants={variants} whileHover={whileHover}>עמוד הבית</motion.p>
                    <motion.p onClick={() => changeRoute('/gallery')} variants={variants} whileHover={whileHover}>גלריה</motion.p>
                    <motion.p onClick={() => changeRoute('/questions')} variants={variants} whileHover={whileHover}>שאלות ותשובות</motion.p>
                </div>
            )}
            
        </div> 
        
    );

}
 
export default NavigationBar;