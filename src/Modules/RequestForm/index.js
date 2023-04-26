import React, {useState} from 'react';
import {
    Form,
    Input,
    DatePicker,
    Cascader,
    Button,
    } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const options = [
    {
        value: 'Sick Leave',
        label: 'Sick Leave',
    },
    {
        value: 'Parental Leave',
        label: 'Parental Leave',
    },
    {
        value: 'Family Leave',
        label: 'Family Leave',
    },
    {
        value: 'Vacation',
        label: 'Vacation',
    },
];

const RequestForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Form values:', values);
        navigate('/timeoff');
    };

    const handleGoBack = () => {
        navigate('/timeoff');
    };

    const [loading, setLoading] = useState(false)
    const onButtonClick=(e)=>{
        console.log('Button clicked')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ marginBottom: 16 }}>
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={handleGoBack}
                >Back</Button>
            </div>
            <Form form={form} onFinish={onFinish} style={{ width: '100%', maxWidth: 400 }}>
                <Form.Item
                    label="Date Range"
                    name="dateRange"
                    rules={[{ required: true, message: 'Please select a date range!' }]}
                >
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item
                    label="Leave Type"
                    name="leaveType"
                    rules={[{ required: true, message: 'Please select a leave type!' }]}
                >
                    <Cascader options={options} placeholder="Please select" />
                </Form.Item>
                <Form.Item label="Note" name="note">
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item style={{ textAlign: 'right' }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RequestForm;
