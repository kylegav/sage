import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Card,
    Form,
    Input,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
  } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const TimeOff = () => {

    const onFinish = (values) => {
        console.log("Finished:", values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed to Finish:", errorInfo)
    };
    return (
        <>
        <Card title={"Time Off Request"}>
        <Form
            name="TimeOff"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
            >
                <Input />
            <Form.Item>
                <Form.Item label="DateRangePicker">
                    <RangePicker />
                </Form.Item>
            </Form.Item>
            </Form.Item>
            <Form.Item label="Reason">
                <Cascader
                    options={[{
                        value: 'Vacation',
                        label: 'Vacation',
                        value: 'Sick Leave',
                        label: 'Sick Leave',
                    },
                    ]}
                    />
            </Form.Item>
            <Form.Item label="Reason for time off request:">
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item>
                <Form.Item>
                    <Button>Submit</Button>
                </Form.Item>
            </Form.Item>
        </Form>
        </Card>
        </>
    )
};

export default TimeOff;