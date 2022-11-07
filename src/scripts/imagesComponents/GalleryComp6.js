import news from '../../images/news-medium.jpg'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import GalleryImgAnimations from './GalleryImgAnimations'


const GalleryComp6 = () => {

    const [ref, inView] = useInView({triggerOnce: true})
    const animationFromLeft = useAnimation()


    return (  
        <div className='addingGradient-container' id="img6" ref={ref}>
            <GalleryImgAnimations 
                inView={inView} 
                animationDirection={animationFromLeft} 
                imgNum={6}
                scaleInView={1} 
                durationInView={0.65}
                xNotInView='-100vw'
                yNotInView='25vh'
                scaleNotInView={0.3}
                imgSrc={news}
                imgAlt='חדשות'
            />
        </div>
    );
}
 
export default GalleryComp6;