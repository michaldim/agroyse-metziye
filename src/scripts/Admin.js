import '../css/Admin.css'
import prettyWoman from '../images/woman-medium.jpg'
import Login from './Login'
import DataChanges from './DataChanges';
import { useOnAuthStateChanged } from '../hooks/useOnAuthStateChanged';
import { useEffect } from 'react';


const Admin = () => {

    const { loginStatus, checkingAuthChange } = useOnAuthStateChanged()

    useEffect(() => {
        checkingAuthChange()
    }, [])


    return (
        <div>
            <div id='adminContainer' style={{backgroundImage: `url(${prettyWoman})`}}>
                <div id='adminBlackCover'></div>
            </div>
            {!loginStatus && <Login />}
            {loginStatus && <DataChanges />}
        </div>  
        
    );
}
 
export default Admin;