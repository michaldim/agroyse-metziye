import soldier from '../../images/soldier-medium-cut.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp4 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromRight = useAnimation()


    return (  
            <div className='addingGradient-container' id="img4" ref={ref}>
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromRight} 
                    imgNum={4}
                    scaleInView={1} 
                    durationInView={0.6}
                    xNotInView='100vw'
                    yNotInView={0}
                    scaleNotInView={0.1}
                    imgSrc={soldier}
                    imgAlt='חדר מלחמה'
                />
            </div>
    );
}
 
export default GalleryComp4;