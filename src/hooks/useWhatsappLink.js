import { db } from '../firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';


const useWhatsappLink = () => {


    const [adminWhatsappLink, setAdminWhatsappLink] = useState('')

    useEffect(() => {
        const docRef = doc(db, 'whatsapp', 'TmjCLLi7wQbrhfJy2aiJ')

        onSnapshot(docRef, doc => {
            setAdminWhatsappLink(doc.data().whatsappLink)
        })

    }, [])
    
    
    return { adminWhatsappLink };
}
 
export default useWhatsappLink;