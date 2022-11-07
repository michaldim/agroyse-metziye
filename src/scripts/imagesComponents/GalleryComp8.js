import ptiliyot from '../../images/ptiliyot-cut.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp8 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromAbove = useAnimation()


    return (  
        <div className='addingGradient-container' id="img8" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromAbove} 
                imgNum={8}
                scaleInView={1} 
                durationInView={0.8}
                xNotInView={0}
                yNotInView={-250}
                scaleNotInView={0.3}
                imgSrc={ptiliyot}
                imgAlt='פתיליות'
            />
        </div>
    );
}
 
export default GalleryComp8;