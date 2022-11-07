import '../css/DataChanges.css'
import Logout from './Logout';
import ChangePrice from './ChangePrice';
import ChangeWhatsAppLink from './ChangeWhatsAppLink';


const DataChanges = () => {

    return (  
        <div id='changesContainer'>
            <Logout />
            <ChangePrice />
            <ChangeWhatsAppLink />
        </div>
    );
}
 
export default DataChanges;