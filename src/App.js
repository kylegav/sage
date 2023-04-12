import AppRoutes from "./Components/AppRoutes";
import NavMenu from "./Components/NavMenu"
import {Layout, Table} from "antd";
import packageInfo from "../package.json"
import dummydata from "./Data/dummydata.json"

const {Content, Footer, Header} = Layout;

function App() {
  
  const data = dummydata
  const columns = [
  {
    title:'Name',
    dataIndex:'Name',
    key: 'employeeID'
  },
  {
    title:'Monday',
    dataIndex:'Monday',
    key: 'employeeID'
  },
  {
    title:'Tuesday',
    dataIndex:'Tuesday',
    key: 'employeeID'
  },
  {
    title:'Wednesday',
    dataIndex:'Wednesday',
    key: 'employeeID'
  },
  {
    title:'Thursday',
    dataIndex:'Thursday',
    key: 'employeeID'
  },
  {
    title:'Friday',
    dataIndex:'Friday',
    key: 'employeeID'
  },
  {
    title:'Saturday',
    dataIndex:'Saturday',
    key: 'employeeID'
  },
  {
    title:'Sunday',
    dataIndex:'Sunday',
    key: 'employeeID'
  }
]

  


  return (
      <Layout>
        <Header>
          <NavMenu/>
        </Header>
        <Layout>
          <Content>
            <AppRoutes></AppRoutes>
          </Content>
          <Content>
            
          </Content>
          <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
            Sage UI {packageInfo.version} ©Kyle Gavin 2023
          </Footer>
        </Layout>
      </Layout>

  );
}

export default App;
