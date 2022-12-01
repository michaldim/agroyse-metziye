import '../css/Questions.css'
import { db } from '../firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";



const Questions = () => {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const [sum, setSum] = useState('')

    useEffect(() => {
        const docRef = doc(db, 'price', 'u9J7v3MYWBTZpJWTFh6c')

        onSnapshot(docRef, doc => {
            setSum(doc.data().ticketPrice)
        })

    }, [])

    let initialAnimateContainer;
    let animateHeader;

    if (isDesktopOrLaptop) {
        initialAnimateContainer = {opacity: 0}
        animateHeader = {scale: [1, 1.2, 1]}
    } else {
        initialAnimateContainer = {opacity: 1}
        animateHeader = {scale: 1}
    }

    
    return ( 
        <motion.div id="questions-container" animate={{opacity: 1}} initial={initialAnimateContainer} transition={{duration: 0.8}}>
            <motion.p id="questions-header" animate={animateHeader} initial={{scale: 1}} transition={{delay: 1, duration: 1.5}}>שאלות ותשובות</motion.p>
            <p className="details"><strong>האם חובה לתאם הגעה?</strong><br/>
            כן, חובה לתאם הגעה מראש.<br/></p>
            <p className="details"><strong>האם ניתן לבקר באתר באופן עצמאי?</strong><br/>
            אין אפשרות לסייר במוזיאון באופן עצמאי, יש להשתבץ לסיור מודרך.<br/></p>
            <p className="details"><strong>כיצד ניתן לתאם סיור?</strong><br/>
            יש ליצור קשר באמצעות הווטסאפ, לציין את כמות האנשים ואת התאריך המבוקש ולוודא ששובצתם.<br/></p>
            <p className="details"><strong>מהו אורכו של הסיור?</strong><br/>
            סיור אורך כשעתיים.<br/></p>
            <p className="details"><strong>לאיזה גילים הסיור מתאים?</strong><br/>
            הסיור מתאים לכל המשפחה ועד גיל 120.<br/></p>
            <p className="details"><strong>מה העלות של הסיור?</strong><br/>
            {`סיור עולה ${sum} ש"ח לאדם מגיל 3.5. המחיר לאדם משתנה כאשר מדובר בקבוצה. יש לשלם במקום במזומן או בביט.`}<br/></p>
            <p className="details"><strong>היכן נמצא המוזיאון?</strong><br/>
            המוזיאון ממוקם בקיבוץ יפעת בסמוך לרחוב הגיתות. למיקום מדוייק יש לכתוב בוויז או במפות גוגל "א גרוייסע מציאה קיבוץ יפעת".<br/></p>
            <p className="details"><strong>האם ניתן לבקר במוזיאון לכל אורך השנה?</strong><br/>
            כן, המוזיאון סגור וממוזג, ועל כן ניתן לסייר במקום בכל עונות השנה.<br/></p>
            {isDesktopOrLaptop && <div id='topGradientForQuestions'></div>}
        </motion.div> 

    );
}
 
export default Questions;



