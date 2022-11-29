import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive';



const GalleryImgAnimations = ({inView, animationDirection, scaleInView, durationInView, xNotInView, yNotInView, scaleNotInView, imgSrc, imgAlt}) => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const localRef = useRef(null);

    const disappear = () => {
        localRef.current.style.pointerEvents = 'none';
        localRef.current.style.opacity = 0;
    }

    const comeBack = () => {
        localRef.current.style.pointerEvents = 'auto';
        localRef.current.style.opacity = 1;
    }

    //The animation that makes the images appear when they are inView:
    useEffect(() => {
        if(inView) {
            animationDirection.start({
                x: 0,
                y: 0,
                opacity: 1,
                scale: scaleInView,
                transition: {
                    duration: durationInView,
                    ease: 'easeOut'
                }
            })
        }
        if(!inView) {
                animationDirection.start({
                    x: xNotInView,
                    y: yNotInView,
                    opacity: 0,
                    scale: scaleNotInView
                })
        } 
    },[inView])

    
    return ( 
        <motion.div animate={animationDirection}> 
            {!isDesktopOrLaptop && (
            <>
                <img src={imgSrc} alt={imgAlt} />
                <div className="gradient"></div>
            </>
            )}
            
            {isDesktopOrLaptop && (
            <div onMouseLeave={comeBack}>
                <motion.div whileHover={{ scale: 1.2 }} transition={{delay: 0.3, duration: 0.5, ease: 'easeOut'}} className='backgroundMainImages' style={{backgroundImage: `url(${imgSrc})`, height: '50vh'}}></motion.div>
                <motion.div ref={localRef} onMouseEnter={disappear} className="gradient"></motion.div>
            </div>
            )}
        
        </motion.div>
    );
}
 
export default GalleryImgAnimations;