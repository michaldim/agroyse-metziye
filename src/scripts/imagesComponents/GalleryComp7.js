import grocery from '../../images/grocery-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp7 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromRight = useAnimation()


    return (  
            <div className='addingGradient-container' id="img7" ref={ref}>
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromRight} 
                    imgNum={7}
                    scaleInView={1.1} 
                    durationInView={0.6}
                    xNotInView='100vw'
                    yNotInView={0}
                    scaleNotInView={0.1}
                    imgSrc={grocery}
                    imgAlt='מצרכים'
                />
            </div>
    );
}
 
export default GalleryComp7;