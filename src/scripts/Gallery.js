import '../css/Gallery.css'
import { useState, useEffect, useRef } from 'react'
import GalleryComp4 from './imagesComponents/GalleryComp4'
import GalleryComp5 from './imagesComponents/GalleryComp5'
import GalleryComp6 from './imagesComponents/GalleryComp6'
import GalleryComp7 from './imagesComponents/GalleryComp7'
import GalleryComp8 from './imagesComponents/GalleryComp8'
import GalleryComp3 from './imagesComponents/GalleryComp3'
import GalleryComp2 from './imagesComponents/GalleryComp2'
import GalleryComp1 from './imagesComponents/GalleryComp1'

const Gallery = () => {

    const ref = useRef(null);
    const [untilMounts, setUntilMounts] = useState(true)


    // ref.current.clientHeight is the height of the #gallery-container div
    // window.innerHeight is the height of the screen
    useEffect(() => {
        const fastInterval = setInterval(() => {
            if (ref.current.clientHeight > window.innerHeight) {
                setUntilMounts(false)
                clearInterval(fastInterval)
            }
        }, 100)
    }, [])


    return (  
        <div className="gallery-container" ref={ref}>
            {/*The animation of the gallery components started to work while the divs that
            surrounded the img tags (inside of these components) were still in height of 0, 
            so the users didn't see the animation of the images that were outside the screen. 
            In order to prevent that, I made an interval in the useEffect above, that checks 
            if the images started to get their real height, and when they did, the #untilMounts 
            div disappears and the animation starts (The animation works only when the images 
            are in view*/}
            {untilMounts && <div id='untilMounts' style={{height: '100vh'}}></div>}
            <GalleryComp1 />
            <GalleryComp2 />
            <GalleryComp3 />
            <GalleryComp4 />
            <GalleryComp5 />
            <GalleryComp6 />
            <GalleryComp7 />
            <GalleryComp8 />
        </div>
    );
}
 
export default Gallery;