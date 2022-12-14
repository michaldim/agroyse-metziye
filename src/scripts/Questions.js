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
    let currentHeight;

    if (isDesktopOrLaptop) {
        initialAnimateContainer = {opacity: 0}
        animateHeader = {scale: [1, 1.2, 1]}
        currentHeight = 'auto';
    } else {
        initialAnimateContainer = {opacity: 1}
        animateHeader = {scale: 1}
        currentHeight = (window.innerHeight - 132.4) + 'px'; //132.4 is the size of the navbar and the bottom bar together
    }

    
    return ( 
        <motion.div id="questions-container" animate={{opacity: 1}} initial={initialAnimateContainer} transition={{duration: 0.8}} style={{height: currentHeight}}>
            <motion.p id="questions-header" animate={animateHeader} initial={{scale: 1}} transition={{delay: 1, duration: 1.5}}>שאלות ותשובות</motion.p>
            <p className="details"><strong>האם חובה לתאם הגעה?</strong><br/>
            כן, חובה לתאם הגעה מראש.<br/></p>
            <p className="details"><strong>האם ניתן לבקר באתר באופן עצמאי?</strong><br/>
            אין אפשרות לסייר במוזיאון באופן עצמאי, יש להשתבץ לסיור מודרך.<br/></p>
            <p className="details"><strong>כיצד ניתן לתאם סיור?</strong><br/>
            יש ליצור קשר באמצעות הווטסאפ, לציין את כמות האנשים ואת התאריך המבוקש ולוודא ששובצתם.<br/></p>
            <p className="details"><strong>מהו אורכו של הסיור?</strong><br/>
            סיור אורך כשעתיים.<br/></p>
            <p className="details"><strong>למי הסיור מתאים?</strong><br/>
            הסיור מתאים למטיילים, למשפחות, לגמלאים, לילדים ולמבוגרים עד גיל 120.<br/></p>
            <p className="details"><strong>האם ניתן לבקר במוזיאון לכל אורך השנה?</strong><br/>
            כן, המוזיאון סגור וממוזג, ועל כן ניתן לסייר במקום בכל עונות השנה.<br/></p>
            <p className="details"><strong>מה העלות של הסיור?</strong><br/>
            {`סיור עולה ${sum} ש"ח לאדם מגיל 3.5. המחיר לאדם משתנה כאשר מדובר בקבוצה גדולה. יש לשלם במקום במזומן או בביט.`}<br/></p>
            <p className="details"><strong>היכן נמצא המוזיאון?</strong><br/>
            המוזיאון ממוקם בקיבוץ יפעת בסמוך לרחוב הגיתות. ניתן לכתוב בוויז או במפות גוגל "א גרוייסע מציאה קיבוץ יפעת".<br/></p>
            <p className="details"><strong>מהן הוראות ההגעה המדויקות?</strong><br/>
            נכנסים בשער של קיבוץ יפעת ונוסעים ישר בלבד! חוצים שתי כיכרות, שאחריהן תתחיל ירידה על באמפרים. בסוף הירידה פונים ימינה לרחוב הגיתות, ומצד ימין יופיע מחסום חשמלי קטן. מחנים את הרכב מול המחסום (תחת העצים). עולים ברגל בכביש שעולה מהמחסום ומיד יתגלה מבנה חד-קומתי בצבע לבן, עליו כתוב: "א גרוייסע מציאה".<br/></p>
            {isDesktopOrLaptop && <div id='topGradientForQuestions'></div>}
        </motion.div> 

    );
}
 
export default Questions;



