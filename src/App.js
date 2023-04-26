import AppRoutes from "./Components/AppRoutes";
import NavMenu from "./Components/NavMenu"
import {Layout, Table} from "antd";
import packageInfo from "../package.json"
import dummydata from "./Data/dummydata.json"

const {Content, Footer, Header} = Layout;

function App() {

  return (
      <Layout>
        <Header>
          <NavMenu/>
        </Header>
        <Layout>
          <Content>
            <AppRoutes></AppRoutes>
          </Content>
          <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
            Sage UI {packageInfo.version} ©Buss In Boots 2023
          </Footer>
        </Layout>
      </Layout>

  );
}

export default App;
