import '../css/ChangePrice.css'
import { useState } from 'react';
import { useUpdateDoc } from '../hooks/useUpdateDoc';
import { useEffect } from 'react';
import { useRef } from 'react';
import DataUpdateAnimation from './DataUpdateAnimation';


const ChangeWhatsAppLink = () => {

    const formRef = useRef()
    const [currentWhatsAppLink, setCurrentWhatsAppLink] = useState()
    const { updatingValue, updateError, updateSucceeded } = useUpdateDoc('whatsapp', 'TmjCLLi7wQbrhfJy2aiJ', 'whatsappLink')
    const [limitedTime, setLimitedTime] = useState(false); //for saying that the update succeeded
    const [growingTextAnimation, setGrowingTextAnimation] = useState(false); //for saying that the info is updating


    const changingWhatsApp = (e) => {
        e.preventDefault();
        setGrowingTextAnimation(true);
        updatingValue(currentWhatsAppLink);
    }

    useEffect(() => {
        if(updateSucceeded) {
            setGrowingTextAnimation(false);
            setLimitedTime(true);
            formRef.current.value = "";
            setTimeout(() => {
                setLimitedTime(false);
            }, 4000);
        }
    }, [updateSucceeded])


    return (  
        <form id='whatsappForm' className='updatingForm' onSubmit={changingWhatsApp}>
            <p>עדכון קישור לווטסאפ</p>
            <input 
                ref={formRef}
                type="text" 
                placeholder='הזן קישור' 
                // pattern="[0-9]{1,3}" 
                minLength="1" 
                maxLength="55" 
                required
                onChange={e => {setCurrentWhatsAppLink(e.target.value.trim())}}
            />
            <br/>
            <input type="submit" value="עדכן"/>
            {growingTextAnimation && <DataUpdateAnimation />}
            {updateError && <p className='updateErrorAlert'><span>אירעה תקלה. המידע לא עודכן. אנא נסה שנית.</span></p>}
            {limitedTime && <p className='updateErrorSucceededAlert'><span>המידע עודכן בהצלחה.</span></p>}
        </form>
    );
}
 
export default ChangeWhatsAppLink;