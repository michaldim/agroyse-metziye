import '../css/DataUpdateAnimation.css'

import { motion } from "framer-motion";

const updaterVariants = {
    hidden: {
        scale: 1
    },
    visible: {
        scale: [1, 1.2],
        transition: {
            yoyo: Infinity,
            duration: 0.8
        }
    }
}


const DataUpdateAnimation = () => {

    return (  
        <div>
            <motion.h2 
                id='tryingToUpdate' 
                variants={updaterVariants}
                initial='hidden'
                animate='visible'
            >מעדכן את המידע</motion.h2>
        </div>
    );
}
 
export default DataUpdateAnimation;