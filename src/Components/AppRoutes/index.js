import {Routes, Route} from "react-router-dom";
import TableView from "../../Modules/TableView";
import Account from "../../Modules/Account";
import TimeOff from "../../Modules/TimeOff";

const AppRoutes = () => {
    return (
        // TODO: Implement Routing to different pages.
        <Routes>
            <Route path ="" element={<TableView/>}/>
            <Route path ="account"  element={<Account/>}/>
            <Route path ="timeoff" element={<TimeOff/>}/>
        </Routes>
    )
}

export default AppRoutes;