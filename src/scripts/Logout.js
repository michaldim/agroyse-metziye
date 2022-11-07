import '../css/Logout.css'
import { useLogout } from '../hooks/useLogout';


const Logout = () => {

    const { logoutUser } = useLogout()

    return ( 
        <div>
            <p id="signOutButton" onClick={logoutUser}>התנתק</p>
        </div> 
    );
}
 
export default Logout;