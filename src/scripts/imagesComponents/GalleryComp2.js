import typewriter from '../../images/typewriter-medium-cut.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp2 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromAbove = useAnimation()


    return (  
        <div className='addingGradient-container' id="img2" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromAbove} 
                imgNum={2}
                scaleInView={1.1} 
                durationInView={0.8}
                xNotInView={0}
                yNotInView={-250}
                scaleNotInView={0.3}
                imgSrc={typewriter}
                imgAlt='מכונת כתיבה'
            />
        </div>
    );
}
 
export default GalleryComp2;