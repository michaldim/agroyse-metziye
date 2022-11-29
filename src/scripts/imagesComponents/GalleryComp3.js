import soda from '../../images/soda-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'
import { useMediaQuery } from 'react-responsive';


const GalleryComp3 = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    let picThreshold;

    if (!isDesktopOrLaptop) {
        picThreshold = 0;
    } else {
        picThreshold = 0.2;
    }

    const [ref, inView] = useInView({triggerOnce: true, threshold: picThreshold})

    const animationFromSide = useAnimation()


    return (  
        <div className='addingGradient-container' id="img3" ref={ref}>
            {!isDesktopOrLaptop &&
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromSide}
                    scaleInView={1.1} 
                    durationInView={0.65}
                    xNotInView='-100vw'
                    yNotInView='25vh'
                    scaleNotInView={0.3}
                    imgSrc={soda}
                    imgAlt='סיפולוקס'
                />
            }  
            {isDesktopOrLaptop && 
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromSide}
                    scaleInView={1.1} 
                    durationInView={0.65}
                    xNotInView='25vw'
                    yNotInView='100vh'
                    scaleNotInView={0.3}
                    imgSrc={soda}
                    imgAlt='סיפולוקס'
                />
            } 
        </div>
    );
}
 
export default GalleryComp3;