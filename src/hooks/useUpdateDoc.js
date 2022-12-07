import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from 'firebase/firestore';

export const useUpdateDoc = (collection, id, key) => {
    
    const [updateError, setUpdateError] = useState(null)
    const [updateSucceeded, setUpdateSucceeded] = useState(null)

    const updatingValue = (value) => {

        setUpdateError(null);
        setUpdateSucceeded(null);

        let object = {}
        object[key] = value; 

        updateDoc(doc(db, collection, id), object)
            .then(() => {
                setUpdateSucceeded(true);
            })
            .catch(err => {
                setUpdateError(err.message)
            })
    }

    return { updatingValue, updateError, updateSucceeded }

    
}
 