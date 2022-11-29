import shopkeeper from '../../images/shopkeeper.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'
import { useMediaQuery } from 'react-responsive';


const GalleryComp1 = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    let picThreshold;

    if (!isDesktopOrLaptop) {
        picThreshold = 0;
    } else {
        picThreshold = 0.2;
    }

    const [ref, inView] = useInView({triggerOnce: true, threshold: picThreshold})

    const animationFromRight = useAnimation()

       
    return (  
            <div className='addingGradient-container' id="img1" ref={ref}>
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromRight} 
                    scaleInView={1} 
                    durationInView={0.6}
                    xNotInView='100vw'
                    yNotInView={0}
                    scaleNotInView={0.1}
                    imgSrc={shopkeeper}
                    imgAlt='מכולת'
                />
            </div>
    );
}
 
export default GalleryComp1;