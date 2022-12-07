import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {

    const [error, setError] = useState(null)

    const loginUser = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
            })
            .catch(err => {
                setError(err.message)
            })
    }

    return { error, loginUser }

    
}
 