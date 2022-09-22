import typewriter from '../../images/typewriter-medium-cut.jpg'
// import '../css/Gallery.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const GalleryComp2 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromAbove = useAnimation()

    useEffect(() => {
            console.log('pic 2 in view', inView)
            if(inView) {
                animationFromAbove.start({
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                        // duration: 0.7,
                        duration: 0.8,
                        ease: 'easeOut'
                    }
                })
                // setOccuredOnce(true);
            }
            if(!inView) {
                // if (occuredOnce === true ) {
                //     console.log('do nothing')
                // } else {
                    animationFromAbove.start({
                        y: -250,
                        opacity: 0,
                        scale: 0.3
                    })
            } 
        },[inView])


    return (  
        <div className='addingGradient-container' id="img2" ref={ref}>
            <motion.div animate={animationFromAbove}>
                <img src={typewriter} alt='מכונת כתיבה'/>
                <div className="gradient"></div>
            </motion.div>
        </div>
    );
}
 
export default GalleryComp2;