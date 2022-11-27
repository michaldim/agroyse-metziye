import '../css/Questions.css'
import { db } from '../firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';


const Questions = () => {

    const [sum, setSum] = useState('')

    useEffect(() => {
        const docRef = doc(db, 'price', 'u9J7v3MYWBTZpJWTFh6c')

        onSnapshot(docRef, doc => {
            setSum(doc.data().ticketPrice)
        })

    }, [])

    
    return ( 
        <div id="questions-container">
            <p id="questions-header">שאלות ותשובות</p>
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
            {`סיור עולה ${sum} ש"ח לאדם מגיל 3.5. יש לשלם במקום במזומן או בביט.`}<br/></p>
            <p className="details"><strong>היכן נמצא המוזיאון?</strong><br/>
            המוזיאון ממוקם בקיבוץ יפעת בסמוך לרחוב הגיתות. למיקום מדוייק יש לכתוב בוויז או במפות גוגל "א גרוייסע מציאה קיבוץ יפעת".<br/></p>
            <p className="details"><strong>האם ניתן לבקר במוזיאון לכל אורך השנה?</strong><br/>
            כן, המוזיאון סגור וממוזג, ועל כן ניתן לסייר במקום בכל עונות השנה.<br/></p>
        </div> 

    );
}
 
export default Questions;



