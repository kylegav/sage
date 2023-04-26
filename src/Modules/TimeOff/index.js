import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
    Button,
    Row,
    Col,
    Table,
    Tag,
    Skeleton,
    Spin,

  } from 'antd';
import { Link } from 'react-router-dom';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    const [loading, setLoading] = useState(true)

    sleep(1000).then(r => setLoading(false))
    const onButtonClick=(e)=>{
        console.log('Button clicked')

    }
    return (
        <>
          <Spin spinning={loading}>
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
            <Skeleton loading={loading}>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                ></Table>
            </Skeleton>
          </Spin>
        </>
    )
};

export default TimeOff;
