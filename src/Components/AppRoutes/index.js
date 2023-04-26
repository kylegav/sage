import {Routes, Route} from "react-router-dom";
import TableView from "../../Modules/TableView";
import Account from "../../Modules/Account";
import TimeOff from "../../Modules/TimeOff";
import RequestForm from "../../Modules/RequestForm"
import Contacts from "../../Modules/Contacts";
import Employee from "../../Modules/Employee";
import Calendar from "../../Modules/CalendarView";

const AppRoutes = () => {
    return (
        // TODO: Implement Routing to different pages.
        <Routes>
            <Route path ="" element={<Calendar/>}/>
            <Route path ="account"  element={<Account/>}/>
            <Route path ="timeoff" element={<TimeOff/>}/>
            <Route path ="timeoff/RequestForm" element={<RequestForm/>}/>
            <Route path ='contacts' element={<Contacts/>}/>
            <Route path ='tableview' element = {<Employee/>}/>
        </Routes>
    )
}

export default AppRoutes;
