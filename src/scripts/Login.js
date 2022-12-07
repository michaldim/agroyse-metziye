import '../css/Login.css'
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useOnAuthStateChanged } from '../hooks/useOnAuthStateChanged';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, loginUser } = useLogin()
    const { checkingAuthChange } = useOnAuthStateChanged()


    const handleSubmit = e => {
        e.preventDefault()
        loginUser(email, password)
        checkingAuthChange()
    }


    return ( 
        <div>
            <form id='signInBox' onSubmit={handleSubmit}>
                <p>התחברות למערכת</p>
                <input 
                    type="email" 
                    placeholder='שם משתמש' 
                    maxLength="25" 
                    required 
                    onChange={e => {setEmail(e.target.value)}}
                />
                <br/>
                <input 
                    type="password" 
                    placeholder='סיסמה' 
                    maxLength="30" 
                    required 
                    onChange={e => {setPassword(e.target.value)}}
                />
                <br/>
                <input type="submit" value="התחבר"/>
                {!error && (<p id="heightHolder">ת</p>)}
                {error && (<p id="loginErr"><span>אירעה שגיאה, אנא נסה שנית.</span></p>)}
            </form>
        </div> 
        
    );
}
 
export default Login;