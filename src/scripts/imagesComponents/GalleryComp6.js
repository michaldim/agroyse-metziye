import news from '../../images/news-medium.jpg'
// import '../css/Gallery.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const GalleryComp6 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromLeft = useAnimation()

    useEffect(() => {
            console.log('pic 6 in view', inView)
            if(inView) {
                animationFromLeft.start({
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                        // duration: 0.55,
                        duration: 0.65,
                        ease: 'easeOut'
                    }
                })
                // setOccuredOnce(true);
            }
            if(!inView) {
                // if (occuredOnce === true ) {
                //     console.log('do nothing')
                // } else {
                    animationFromLeft.start({
                        x: '-100vw',
                        y: '25vh',
                        opacity: 0,
                        scale: 0.3
                    })
            } 
        },[inView])


    return (  
        <div className='addingGradient-container' id="img6" ref={ref}>
            <motion.div animate={animationFromLeft}>
                <img src={news} alt='חדשות' />
                <div className="gradient"></div>
            </motion.div>
        </div>
    );
}
 
export default GalleryComp6;