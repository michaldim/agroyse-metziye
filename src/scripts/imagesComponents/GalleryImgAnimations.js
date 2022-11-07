import { motion } from 'framer-motion'
import { useEffect } from 'react'



const GalleryImgAnimations = ({inView, animationDirection, imgNum, scaleInView, durationInView, xNotInView, yNotInView, scaleNotInView, imgSrc, imgAlt}) => {


    useEffect(() => {
        // console.log('pic '+ imgNum + ' in view', inView)
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
            <img src={imgSrc} alt={imgAlt} />
            <div className="gradient"></div>
        </motion.div>
    );
}
 
export default GalleryImgAnimations;