import { useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const useOnAuthStateChanged = () => {

    const [loginStatus, setLoginStatus] = useState(null)

    const checkingAuthChange = () => {
        onAuthStateChanged(auth, user => {
            console.log('2 user status changed, user: ', user);
            if(user) {
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }
        })
    }

    return { loginStatus, checkingAuthChange }

    
}
 