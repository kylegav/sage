import {Card, Table} from 'antd';
import dummydata from "../../Data/dummydata.json"

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
    return (
    <>
    <Card title={"Employee Page"}/>
    <Table 
              dataSource={data}
              columns = {columns}
            >

            </Table>
    </>
    )
    
};


export default Employee
