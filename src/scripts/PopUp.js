import '../css/PopUp.css'
import WhatsAppSVG from './SVGs/WhatsAppSVG';
import ClosingXSVG from './SVGs/ClosingXSVG';
import { motion } from "framer-motion";


const PopUp = ({set, reveal, sonId}) => {    //set and sonId comes from Home.js and ConnectByLogo.js
                                            //reveal comes from ConnectByLogo.js
    const closePopUps = () => {
        set(false); 
    }
    
    return (  
        <div>
                <div className='whatsAppDownload-container'>
                    <motion.div className='whatsAppDownload-miniContainer' id={sonId} initial={{y: -2000}} animate={{y: 0}} transition={{duration: 0.8, type: 'spring', stiffness: 110}}>
                        <div className='popUpX' onClick={closePopUps}>
                            <ClosingXSVG size='25px' color="#555"/>
                        </div>
                        {!reveal && <p style={{paddingBottom: '18px'}}>על מנת לתאם ביקור יש לשלוח הודעת ווטסאפ למספר <span style={{fontWeight: 'bold'}}>052-8048222</span> ולציין את שמך, את תאריך הביקור המבוקש ואת מספר המבקרים.<br/> תוך מספר שעות נחזור אליך ונתאם יחד את הגעתך.</p>}
                        <p>על מנת לשלוח הודעת ווטסאפ מהמחשב, עליך להוריד את אפליקציית<br/> <span style={{color: '#1aba2a'}}>WhatsApp Messenger</span></p>
                        <a href='https://www.whatsapp.com/download' target="_blank" rel="noopener noreferrer">להורדה</a>
                        <p className='dontNeedToDownload'>האפליקציה כבר מותקנת אצלך על המחשב?</p>
                        <a className='popUpSendUsMessage' href='whatsapp://send?phone=972528048222'>שלח לנו הודעה</a>
                        <WhatsAppSVG color='#1aba2a' width='30px' height='30px'/>
                    </motion.div>
                </div>
        </div>
    );
}
 
export default PopUp;