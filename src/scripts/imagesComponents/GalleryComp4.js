import soldier from '../../images/soldier-medium-cut.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'
import { useMediaQuery } from 'react-responsive';


const GalleryComp4 = () => {

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
            <div className='addingGradient-container' id="img4" ref={ref}>
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromRight} 
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