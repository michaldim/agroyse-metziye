import '../css/Gallery.css'
import { useState } from 'react'
import GalleryComp4 from './imagesComponents/GalleryComp4'
import GalleryComp5 from './imagesComponents/GalleryComp5'
import GalleryComp6 from './imagesComponents/GalleryComp6'
import GalleryComp7 from './imagesComponents/GalleryComp7'
import GalleryComp8 from './imagesComponents/GalleryComp8'
import GalleryComp3 from './imagesComponents/GalleryComp3'
import GalleryComp2 from './imagesComponents/GalleryComp2'
import GalleryComp1 from './imagesComponents/GalleryComp1'

const Gallery = () => {

    const [untilMounts, setUntilMounts] = useState(true)

    setTimeout(() => {
        setUntilMounts(false);
    }, 200);

    return (  
        <div className="gallery-container">
            {/* Since the divs that surround the images start in height:0, I give them 
            200ms to get their real height, so the animation will start when they are in
            view and not at the loading of this page */}
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