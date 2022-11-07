import '../css/ChangePrice.css'
import { useState } from 'react';
import { useUpdateDoc } from '../hooks/useUpdateDoc';
import { useEffect } from 'react';
import { useRef } from 'react';
import DataUpdateAnimation from './DataUpdateAnimation';


const ChangePrice = () => {

    const formRef = useRef()
    const [price, setPrice] = useState()
    const { updatingValue, updateError, updateSucceeded } = useUpdateDoc('price', 'u9J7v3MYWBTZpJWTFh6c', 'ticketPrice')
    const [limitedTime, setLimitedTime] = useState(false); //for saying that the update succeeded
    const [growingTextAnimation, setGrowingTextAnimation] = useState(false); //for saying that the info is updating


    const changingPrice = (e) => {
        e.preventDefault();
        setGrowingTextAnimation(true);
        updatingValue(price);
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
        <form id='ticketPrice' className='updatingForm' onSubmit={changingPrice}>
            <p>עדכון מחיר כרטיס</p>
            <input 
                ref={formRef}
                type="text" 
                placeholder='הזן ספרות בלבד' 
                pattern="[0-9]{1,3}" 
                minLength="1" 
                maxLength="3" 
                required
                onChange={e => {setPrice(Number(e.target.value))}}
            />
            <br/>
            <input type="submit" value="עדכן"/>
            {growingTextAnimation && <DataUpdateAnimation />}
            {updateError && <p className='updateErrorAlert'><span>אירעה תקלה. המחיר לא עודכן. אנא נסה שנית.</span></p>}
            {limitedTime && <p className='updateErrorSucceededAlert'><span>מחיר הכרטיס עודכן בהצלחה.</span></p>}
        </form>
    );
}
 
export default ChangePrice;