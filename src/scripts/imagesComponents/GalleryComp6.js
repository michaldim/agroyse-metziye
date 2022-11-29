import news from '../../images/news-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'
import { useMediaQuery } from 'react-responsive';


const GalleryComp6 = () => {
    
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    let xLocation;
    let yLocation;

    if (isDesktopOrLaptop) {
        xLocation = '0vw';
        yLocation = '-100vh';
    } else {
        xLocation = '-100vw';
        yLocation = '25vh';
    }

    let picThreshold;

    if (!isDesktopOrLaptop) {
        picThreshold = 0;
    } else {
        picThreshold = 0.2;
    }

    const [ref, inView] = useInView({triggerOnce: true, threshold: picThreshold})

    const animationFromLeft = useAnimation()


    return (  
        <div className='addingGradient-container' id="img6" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromLeft} 
                scaleInView={1} 
                durationInView={0.65}
                xNotInView={xLocation}
                yNotInView={yLocation}
                scaleNotInView={0.3}
                imgSrc={news}
                imgAlt='חדשות'
            />
        </div>
    );
}
 
export default GalleryComp6;