import {Routes, Route} from "react-router-dom";
import TableView from "../../Modules/TableView";
import Account from "../../Modules/Account";
import TimeOff from "../../Modules/TimeOff";
import Contacts from "../../Modules/Contacts";
import Employee from "../../Modules/Employee";

const AppRoutes = () => {
    return (
        // TODO: Implement Routing to different pages.
        <Routes>
            <Route path ="" element={<TableView/>}/>
            <Route path ="account"  element={<Account/>}/>
            <Route path ="timeoff" element={<TimeOff/>}/>
            <Route path ='contacts' element={<Contacts/>}/>
            <Route path ='employee' element = {<TableView/>}/>
            <Route path ='tableview' element = {<Employee/>}/>
        </Routes>
    )
}

export default AppRoutes;