import AppRoutes from "./Components/AppRoutes";
import NavMenu from "./Components/NavMenu"
import {Layout, Table} from "antd";
import packageInfo from "../package.json"

const {Content, Footer, Header} = Layout;

function App() {
  
  const data = [
    {"Name": "John Smith", "Wednesday": "Unavailable", "Thursday": ["12:45 PM", "09:00 PM"], "Friday": ["12:45 PM", "08:30 PM"], "Saturday": ["12:45 PM", "07:15 PM"], "Sunday": "Unavailable", "Monday": ["12:45 PM", "08:45 PM"], "Tuesday": ["12:45 PM", "06:45 PM"], key: '1'},
    {"Name": "Dennis Rogers", "Wednesday": "Unavailable", "Thursday": ["12:45 PM", "08:00 PM"], "Friday": ["12:45 PM", "08:15 PM"], "Saturday": ["12:45 PM", "07:30 PM"], "Sunday": "Unavailable", "Monday": ["12:45 PM", "07:45 PM"], "Tuesday": ["12:45 PM", "07:00 PM"], key: '2'},
    {"Name": "Mary Ross", "Wednesday": "Unavailable", "Thursday": ["12:30 PM", "08:15 PM"], "Friday": ["12:30 PM", "08:00 PM"], "Saturday": ["12:45 PM", "06:00 PM"], "Sunday": "Unavailable", "Monday": ["12:45 PM", "05:45 PM"], "Tuesday": ["12:45 PM", "06:30 PM"], key: '3'},
    {"Name": "Joe Schmoe ", "Wednesday": "Unavailable", "Thursday": ["12:30 PM", "07:45 PM"], "Friday": ["12:30 PM", "09:00 PM"], "Saturday": ["12:30 PM", "05:45 PM"], "Sunday": "Unavailable", "Monday": ["12:30 PM", "06:45 PM"], "Tuesday": ["12:30 PM", "06:15 PM"], key: '4'},
    {"Name": "Greg ", "Wednesday": "Unavailable", "Thursday": ["12:15 PM", "08:15 PM"], "Friday": ["12:30 PM", "08:30 PM"], "Saturday": ["12:30 PM", "07:30 PM"], "Sunday": "Unavailable", "Monday": ["12:30 PM", "08:45 PM"], "Tuesday": ["12:30 PM", "07:00 PM"], key: '5'},
  ]
  const columns = [
  {
    title:'Name',
    dataIndex:'Name',
    key: 'key'
  },
  {
    title:'Monday',
    dataIndex:'Monday',
    key: 'key'
  },
  {
    title:'Tuesday',
    dataIndex:'Tuesday',
    key: 'key'
  },
  {
    title:'Wednesday',
    dataIndex:'Wednesday',
    key: 'key'
  },
  {
    title:'Thursday',
    dataIndex:'Thursday',
    key: 'key'
  },
  {
    title:'Friday',
    dataIndex:'Friday',
    key: 'key'
  },
  {
    title:'Saturday',
    dataIndex:'Saturday',
    key: 'key'
  },
  {
    title:'Sunday',
    dataIndex:'Sunday',
    key: 'key'
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
            <Table 
              dataSource={data}
              columns = {columns}
            >

            </Table>
          </Content>
          <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
            Sage UI {packageInfo.version} ©Kyle Gavin 2023
          </Footer>
        </Layout>
      </Layout>

  );
}

export default App;
