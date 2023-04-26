import React, {useState} from 'react';
import {
    Form,
    Input,
    DatePicker,
    Cascader,
    Button,
    Skeleton,
    Spin,

    } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
    const [loading, setLoading] = useState(true);

    sleep(1000).then(r => setLoading(false))

    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onFinish = (values) => {
        console.log('Form values:', values);
        navigate('/timeoff');
    };

    const handleGoBack = () => {
        navigate('/timeoff');
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
          <Spin spinning={loading}>
            <div style={{ marginBottom: 16 }}>
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={handleGoBack}
                >Back</Button>
            </div>
            <Skeleton loading={loading}>
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
            </Skeleton>
      </Spin>
        </div>
    );
};

export default RequestForm;
