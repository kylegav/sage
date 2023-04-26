import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Form,
    Input,
    DatePicker,
    Cascader,
    Button
} from 'antd';
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
        // Here you can add the logic to submit the form data to your backend
    };

    const handleGoBack = () => {
        navigate('/timeoff');
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Button
                type='text'
                icon={<ArrowLeftOutlined />}
                onClick={handleGoBack}
            >Back</Button>
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
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RequestForm;
