import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {

    const [errorLoggingOut, setErrorLoggingOut] = useState(null)

    const logoutUser = () => {
        setErrorLoggingOut(null)
        signOut(auth)
            .then(() => {
            })
            .catch(err => {
                setErrorLoggingOut(err.message)
            })
    }

    return { errorLoggingOut, logoutUser }
    
}
 