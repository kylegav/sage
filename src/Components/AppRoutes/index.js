import {Routes, Route} from "react-router-dom";
import TableView from "../../Modules/TableView";

const AppRoutes = () => {
    return (
        // TODO: Implement Routing to different pages.
        <Routes>
            <Route path ="" element={<TableView/>}/>
        </Routes>
    )
}

export default AppRoutes;