import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
    Button,
    Row,
    Col,
    Table,
    Tag,
  } from 'antd';
import { Link } from 'react-router-dom';

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
        name: 'Joe Shmama',
        date: 'August 13',
        status: 'Denied',
    },
    {
        name: 'Joe Shmama',
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
            <Card title={"Time Off Page"}/>
            <Row justify="end" style={{ marginBottom: '1rem' }}>
                <Col>
                    <Link to="/timeoff/RequestForm">
                        <Button
                            type='default'
                            style={{ float: 'right' }}
                            loading={loading}
                            icon={<PlusOutlined />}
                            onClick={onButtonClick}
                        >Request Availability</Button>
                    </Link>
                </Col>
            </Row>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                ></Table>
        </>
    )
};

export default TimeOff;
