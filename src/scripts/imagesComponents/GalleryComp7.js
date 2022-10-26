import grocery from '../../images/grocery-medium.jpg'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const GalleryComp7 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromRight = useAnimation()

    useEffect(() => {
            console.log('pic 7 in view', inView)
            if(inView) {
                animationFromRight.start({
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                        // duration: 0.5,
                        duration: 0.6,
                        ease: 'easeOut'
                    }
                })
                // setOccuredOnce(true);
            }
            if(!inView) {
                // if (occuredOnce === true ) {
                //     console.log('do nothing')
                // } else {
                    animationFromRight.start({
                        x: '100vw',
                        opacity: 0,
                        scale: 0.1
                    })
            } 
        },[inView])


    return (  
            <div className='addingGradient-container' id="img7" ref={ref}>
                <motion.div animate={animationFromRight}>
                    <img src={grocery} alt='מצרכים' />
                    <div className="gradient"></div>
                </motion.div>
            </div>
    );
}
 
export default GalleryComp7;