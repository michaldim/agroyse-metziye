import ptiliyot from '../../images/ptiliyot-cut.jpg'
// import '../css/Gallery.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const GalleryComp8 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromAbove = useAnimation()

    useEffect(() => {
            console.log('pic 8 in view', inView)
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
        <div className='addingGradient-container' id="img8" ref={ref}>
            <motion.div animate={animationFromAbove}>
                <img src={ptiliyot} alt='פתיליות' />
                <div className="gradient"></div>
            </motion.div>
        </div>
    );
}
 
export default GalleryComp8;