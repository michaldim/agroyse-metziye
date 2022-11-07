import shopkeeper from '../../images/shopkeeper.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp1 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromRight = useAnimation()

       
    return (  
            <div className='addingGradient-container' id="img1" ref={ref}>
                <GalleryImgAnimations 
                    inView={inView} 
                    animationDirection={animationFromRight} 
                    imgNum={1}
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