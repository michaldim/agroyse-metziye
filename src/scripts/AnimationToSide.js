import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


const AnimationToSide = ({inView, src, alt, id, startingPoint}) => {

    const animationToSide = useAnimation()

    useEffect(() => {
        if(inView) {
            animationToSide.start({
                x: 0, 
                opacity: 1,
                transition: {
                    type: 'spring', 
                    duration: 1.8, 
                    bounce: 0.4
                }
            })
        }
        if(!inView) {
            animationToSide.start({
                x: startingPoint, 
                opacity: 0.6
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);


    return (  
        <motion.img id={id} src={src} alt={alt}
                animate={animationToSide}
        />
    );
}
 
export default AnimationToSide;