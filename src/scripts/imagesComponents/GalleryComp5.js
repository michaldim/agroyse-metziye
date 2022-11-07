import farm from '../../images/farm-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp5 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromAbove = useAnimation()


    return (  
        <div className='addingGradient-container' id="img5" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromAbove} 
                imgNum={5}
                scaleInView={1.1} 
                durationInView={0.8}
                xNotInView={0}
                yNotInView={-250}
                scaleNotInView={0.3}
                imgSrc={farm}
                imgAlt='חווה'
            />
        </div>
    );
}
 
export default GalleryComp5;