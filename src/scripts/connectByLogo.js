import '../css/ConnectByLogo.css'
import '../css/PopUp.css'
import useWhatsappLink from '../hooks/useWhatsappLink';
import { useMediaQuery } from 'react-responsive';
import WhatsAppSVG from './SVGs/WhatsAppSVG';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClosingXSVG from './SVGs/ClosingXSVG';
import { motion, useScroll } from 'framer-motion';
import PopUp from './PopUp';


const ConnectByLogo = ({open}) => { //this 'open' comes from App.js and it controlls the popUp inside Home.js 

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const navigate = useNavigate();

    const {adminWhatsappLink} = useWhatsappLink();

    const [reveal, setReveal] = useState(false)

    const { scrollY } = useScroll();

    // When we scroll, the popUp will get closed
    useEffect(() => {
        return scrollY.onChange(() => {
            setReveal(false)
        })
    }, [scrollY])

    //targets for the whatsApp and facebook links:
    let target;
    let color;
    let insideColor;
    let phoneVoiceColor;
    let size; //the logos width and height

    if (isDesktopOrLaptop) {
        target = "_blank";
        color = "#e4cf69"; //yellow
        insideColor = '#696868'; //grey
        phoneVoiceColor = '#f0e2a1'; //lighter yellow
        size = "25px";
    } else {
        target = "_self";
        color = "#555"; //grey
        insideColor = '#ceb698'; //light brown
        phoneVoiceColor = "rgb(105, 104, 104)";
        size = "40px";
    }

    

    return (  
        <div id="logos-container">

            {/* whatsapp logo */}
            {!isDesktopOrLaptop && 
                <a href={`${adminWhatsappLink}`} target={target} rel="noopener noreferrer">
                    <WhatsAppSVG color={color} width={size} height={size}/>
                    <p>WhatsApp</p>
                </a>
            }
            {/* whatsapp logo */}
            {isDesktopOrLaptop && 
                <div onClick={() => { 
                    //if the popUp inside Home.js is closed then this popUp can open
                    if (!open) {   
                        setReveal(true)
                    }
                }}>
                    <WhatsAppSVG color={color} width={size} height={size}/>
                </div>
            }

            {reveal && <PopUp set={setReveal} reveal={reveal} sonId='whatsAppDownload-miniContainer'/>}
                {/* // <div>
                //     {isDesktopOrLaptop && (
                //         <div className='whatsAppDownload-container'>
                //             <motion.div className='whatsAppDownload-miniContainer' id='whatsAppDownload-miniContainer'  initial={{y: -2000}} animate={{y: 0}} transition={{duration: 0.8, type: 'spring', stiffness: 110}}>
                //                 <div className='popUpX' onClick={() => setClose(false)}>
                //                     <ClosingXSVG size='25px' color="#555"/>
                //                 </div>
                //                 <p id='download'>על מנת לשלוח הודעת ווטסאפ מהמחשב, עליך להוריד את אפליקציית <br/><span style={{color: '#1aba2a'}}>WhatsApp Messenger</span></p>
                //                 <a href='https://www.whatsapp.com/download' target="_blank" rel="noopener noreferrer">להורדה</a>
                //                 <p id='dontNeedToDownload'>האפליקציה כבר מותקנת אצלך על המחשב?</p>
                //                 <a id='popUpSendUsMessage' href='whatsapp://send?phone=972528048222'>שלח לנו הודעה</a>
                //                 <WhatsAppSVG color='#1aba2a' width='30px' height='30px'/>
                //             </motion.div>
                //         </div>
                //     )}
                // </div> */}
            
            

            {/* phone logo */}
            <a id='phone' href="tel:+972528048222">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} x="0px" y="0px"
                viewBox="0 0 480.56 480.56" style={{enableBackground: "new 0 0 480.56 480.56"}} xmlSpace="preserve">
                    <g>
                        <g>
                            <path fill={color} d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
                                c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4
                                c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
                                c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
                                c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
                                c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"/>
                            <path fill={phoneVoiceColor} d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
                                c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"/>
                            <path fill={phoneVoiceColor} d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
                                l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"/>
                        </g>
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
                {!isDesktopOrLaptop && <p>052-8048222</p>}
            </a>
            



            {/* facebook logo */}
            <a href="https://www.facebook.com/drorbarak.nostalgia" target={target} rel="noopener noreferrer">
                <svg viewBox="0 0 36 36" fill="url(#jc_2)" height={size} width={size}>
                    <defs>
                        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jc_2">
                            <stop offset="0%" stopColor={color}></stop>
                            <stop offset="100%" stopColor={color}></stop>
                        </linearGradient>
                    </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                    <path fill={insideColor} d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                </svg>
                {!isDesktopOrLaptop && <p>Facebook</p>}
            </a>
            

        </div>
    );
}
 
export default ConnectByLogo;