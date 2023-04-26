import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
    Button,
    Space,
    Table,
    Tag,
  } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a,b) => new Date(a.date) - new Date(b.date),
    },
    {
        //Use column.shouldCellUpdate to update status tag
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render:(status) => (
            <>
                {status === 'Approved' && <Tag color='green'>{status}</Tag>}
                {status === 'Denied' && <Tag color='red'>{status}</Tag>}
                {status === 'Pending' && <Tag color='orange'>{status}</Tag>}
            </>
        ),
    },
]

const data = [
    {
        name: 'Joe Shmama',
        date: 'August 12',
        status: 'Approved',
    },
    {
        name: 'Mike Hawk',
        date: 'August 13',
        status: 'Denied',
    },
    {
        name: 'Johnny Blaze',
        date: 'August 9',
        status: 'Pending',
    },
]

const TimeOff = () => {
    const [loading, setLoading] = useState(false)
    const onButtonClick=(e)=>{
        console.log('Button clicked')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    return (
        <>
            <Button
                type='primary'
                loading={loading}
                icon={<PlusOutlined />}
                onClick={onButtonClick}
                >Request Availability</Button>
            <Card title={"Time Off Page"}/>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                ></Table>
        </>
    )
};

export default TimeOff;
