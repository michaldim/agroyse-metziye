import '../css/TextualInfoContainer.css'
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion';
import WhoCanCome from './WhoCanCome'


const TextualInfoContainer = () => {

    const [ref, inView ] = useInView({threshold: 0.5, triggerOnce: true})

    const animation = useAnimation()

    useEffect(() => {
        if(inView) {
            animation.start({
                scale: [1, 1.3, 1], 
                opacity: 1
            })
        }
        if(!inView) {
            animation.start({
                opacity: 0
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);


    return (  
        <div id='textualInfo-container' ref={ref}>
            <motion.div id='oldIsrael-container' animate={animation} transition={{duration: 1, delay: 1}}><p id="oldIsrael">בואו ליהנות משעתיים של מסע במנהרת הזמן אל ארץ ישראל הישנה!</p></motion.div>
            <motion.div id="interestingMuseum1-container" animate={animation} transition={{duration: 1, delay: 0.5}}><p id="interestingMuseum1">מוזיאון חוויתי מרתק עם 2500 פריטי ארץ ישראל נדירים</p></motion.div>
            <motion.div id="interestingMuseum2-container" animate={animation} transition={{duration: 1}}><p id="interestingMuseum2">תשע תחנות משוחזרות, עשרות פעלולים טכניים והמון סיפורים משעשעים</p></motion.div>
            <WhoCanCome animate={animation} transition={{duration: 1, delay: 1.5}}/>
        </div>
    );
}
 
export default TextualInfoContainer;