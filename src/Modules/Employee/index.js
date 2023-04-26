import {Card, Table, Spin, Skeleton} from 'antd';
import dummydata from "../../Data/dummydata.json"
import {useState} from "react";


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

// TODO: Table needs to be editable
// TODO: Create onClick methods to navigate to a form to update employee information

const Employee = () => {

    const [loading, setLoading] = useState(true);

  // Illusion of "loading data"
    sleep(1000).then(r => setLoading(false))

    return (
    <>
      <Spin spinning={loading}>
    <Card title={"Employee Page"}/>
        <Skeleton loading={loading}>
    <Table 
              dataSource={data}
              columns = {columns}
            >

    </Table>
        </Skeleton>
      </Spin>
    </>
    )
    
};


export default Employee
