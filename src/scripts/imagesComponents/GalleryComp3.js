import soda from '../../images/soda-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp3 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromLeft = useAnimation()


    return (  
        <div className='addingGradient-container' id="img3" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromLeft}
                imgNum={3} 
                scaleInView={1.1} 
                durationInView={0.65}
                xNotInView='-100vw'
                yNotInView='25vh'
                scaleNotInView={0.3}
                imgSrc={soda}
                imgAlt='סיפולוקס'
            />
        </div>
    );
}
 
export default GalleryComp3;