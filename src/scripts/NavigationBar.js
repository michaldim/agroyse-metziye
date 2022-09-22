import { useNavigate } from 'react-router-dom';
import '../css/NavigationBar.css'
import { AnimatePresence, motion } from 'framer-motion';



const NavigationBar = ({info, setInfo}) => {    // The prop comes from AnimatedRoutes.js

    const navigate = useNavigate();

    return ( 
        <div>
            <div id="navBar-container" onClick={() => setInfo(true)}>
                {/* the hamburger sign */}
                {!info && (
                    <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#FFFFE0"/>
                        <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#FFFFE0"/>
                        <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#FFFFE0"/>
                    </svg> 
                )}
            </div>

            
            <AnimatePresence>  {/* AnimatePresence let us use exit in our animation */}
                {info && (
                    <motion.div 
                        initial={{y: '-100vh'}} 
                        animate={{y: 0}} 
                        exit={{y: '-100vh', transition: {duration: 0.75}}}
                        transition={{duration: 0.3, type: "tween", ease: "easeInOut"}} 
                        id="info-container"
                    >
                        
                        {/* the closing X */}
                        <svg onClick={() => setInfo(false)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" x="0px" y="0px"
                            viewBox="0 0 47.971 47.971" style={{enableBackground: "new 0 0 47.971 47.971"}} xmlSpace="preserve">
                        <g>
                            <path fill="#FFFFE0" d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                        <p onClick={() => {
                            navigate('/');
                            setInfo(false);
                        }}>עמוד הבית</p>

                        <p onClick={() => {
                            navigate('/gallery');
                            setInfo(false);
                        }}>גלריה</p>
                        <p>שאלות ותשובות</p>
                        <p>כניסה למערכת</p>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>  
    );

}
 
export default NavigationBar;