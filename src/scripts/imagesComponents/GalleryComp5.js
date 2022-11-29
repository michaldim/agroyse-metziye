import farm from '../../images/farm-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'
import { useMediaQuery } from 'react-responsive';


const GalleryComp5 = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    let picThreshold;

    if (!isDesktopOrLaptop) {
        picThreshold = 0;
    } else {
        picThreshold = 0.2;
    }

    const [ref, inView] = useInView({triggerOnce: true, threshold: picThreshold})
    
    const animationFromAbove = useAnimation()


    return (  
        <div className='addingGradient-container' id="img5" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromAbove} 
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