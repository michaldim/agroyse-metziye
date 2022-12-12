import '../css/Logout.css'
import { useLogout } from '../hooks/useLogout';


const Logout = () => {

    const { logoutUser } = useLogout()

    return ( 
        <div id="signOutButton-container">
            <p id="signOutButton" onClick={logoutUser}>התנתק</p>
        </div> 
    );
}
 
export default Logout;