import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
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
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render:(_, { tags }) => (
            <>
                {tags?.map((tag) => {
                        let color = tag === 'Available' ? 'geekblue' : 'green';
                        if (tag === 'Denied') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    }
                )}
            </>
        ),
    },
]

const data = [
    {
        name: "Joe Shmama",
        date: "August 12",
        status: "Available",
    },
    {
        name: "Mike Hawk",
        date: "August 12",
        status: "Denied",
    }
]
const TimeOff = () => {
    return (
        <>
            <Card title={"Time Off page"}/>
            <Table
                dataSource={data}
                columns={columns}
                ></Table>
        </>
    )
};

export default TimeOff;
