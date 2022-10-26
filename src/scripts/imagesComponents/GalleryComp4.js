import soldier from '../../images/soldier-medium-cut.jpg'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const GalleryComp4 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromRight = useAnimation()

    useEffect(() => {
            console.log('pic 4 in view', inView)
            if(inView) {
                animationFromRight.start({
                    x: 0,
                    opacity: 1,
                    scale: 1.1,
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
            <div className='addingGradient-container' id="img4" ref={ref}>
                <motion.div animate={animationFromRight}>
                    <img src={soldier} alt='חדר מלחמה' />
                    <div className="gradient"></div>
                </motion.div>
            </div>
    );
}
 
export default GalleryComp4;