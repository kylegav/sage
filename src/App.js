import AppRoutes from "./Components/AppRoutes";
import NavMenu from "./Components/NavMenu"
import {Layout} from "antd";
import packageInfo from "../package.json"

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
            Sage UI {packageInfo.version} ©Kyle Gavin 2023
          </Footer>
        </Layout>
      </Layout>

  );
}

export default App;
