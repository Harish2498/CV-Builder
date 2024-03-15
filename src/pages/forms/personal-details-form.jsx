import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, message, Flex } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input

const existingPersonalDetails = JSON.parse(localStorage.getItem('personalDetails')) || {}

const PersonalDetailsForm = () => {
    const [personalProfile, setPersonalProfile] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (personalProfile.length) {
            localStorage.setItem('personalDetails', JSON.stringify(values));
            message.success('Personal Details form submit successfully.');
        } else {
            message.error('filled your Personal Profile!');
        }

    };

    const onFinishSecondForm = (values) => {
        if (editIndex !== null) {
            let existingPersonalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
            existingPersonalProfile[editIndex] = values;
            setPersonalProfile(existingPersonalProfile);
            localStorage.setItem('personalProfile', JSON.stringify(existingPersonalProfile));
            setEditIndex(null);
        } else {
            let existingPersonalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
            const newPersonalProfile = [...existingPersonalProfile, values];
            setPersonalProfile(newPersonalProfile);
            localStorage.setItem('personalProfile', JSON.stringify(newPersonalProfile));
        }
        form.resetFields();
    };

    const deletePersonalProfile = (index) => {
        let existingPersonalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
        existingPersonalProfile.splice(index, 1)
        setPersonalProfile(existingPersonalProfile);
        localStorage.setItem('personalProfile', JSON.stringify(existingPersonalProfile));
    }

    const editPersonalProfile = (index) => {
        setEditIndex(index);
        let existingPersonalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
        const profileToEdit = existingPersonalProfile[index];
        if (profileToEdit) {
            // Set the profile to edit into the TextArea
            form.setFieldsValue({ personalProfile: profileToEdit.personalProfile });
        }
    };

    useEffect(() => {
        let existingPersonalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
        setPersonalProfile(existingPersonalProfile);
    }, [])


    return (
        <div>
            <Title level={1} style={{ color: '#1677ff' }} >
                Let's Start with your details
            </Title>
            <Row>
                <Col span={12}>

                    <Form
                        form={form}
                        name="basic"
                        layout='vertical'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{ maxWidth: '400px', margin: '0 auto' }}
                    >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="First Name"
                                    name="firstName"
                                    initialValue={existingPersonalDetails.firstName}
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="Surname"
                                    name="surname"
                                    initialValue={existingPersonalDetails.surname}
                                    rules={[{ required: true, message: 'Please input your surname!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="City"
                                    name="city"
                                    initialValue={existingPersonalDetails.city}
                                    rules={[{ required: true, message: 'Please input your city!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="Country"
                                    name="country"
                                    initialValue={existingPersonalDetails.country}
                                    rules={[{ required: true, message: 'Please input your country!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="Pincode"
                                    name="pincode"
                                    initialValue={existingPersonalDetails.pincode}
                                    rules={[{ required: true, message: 'Please input your pincode!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    className=' font-medium mb-1'
                                    label="Phone"
                                    name="phone"
                                    initialValue={existingPersonalDetails.phone}
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input variant="filled" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            className=' font-medium '
                            label="Email"
                            name="email"
                            initialValue={existingPersonalDetails.email}
                            rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                        >
                            <Input variant="filled" />
                        </Form.Item>


                        <Form.Item>
                            <Button type='primary' danger htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12} className='  h-96 overflow-auto'>
                    <Row>
                        <Col span={24}>
                            <Form
                                form={form}
                                name="basic"
                                layout='vertical'
                                onFinish={onFinishSecondForm}
                                style={{ margin: '0 auto' }}
                            >
                                <Form.Item
                                    className='font-medium mb-1  '
                                    label="Personal Profile"
                                    name="personalProfile"
                                    rules={
                                        [{ required: true, message: 'Please enter personal profile ' }]
                                    }
                                >
                                    <TextArea className='mb-2' variant='filled' rows={2} />

                                </Form.Item>
                                <Form.Item>
                                    <Button size='small' htmlType='submit'>{editIndex !==null  ? 'Update' : 'Add+'}</Button>
                                </Form.Item>

                            </Form>
                        </Col>
                    </Row>
                    <Row className='border-slate-400 border-dotted rounded-md p-2 border-2 h-52 overflow-auto'>
                        <Col span={24}>
                            <ul>
                                {
                                    personalProfile?.map((e, index) => (
                                        <div key={index} className='flex justify-between px-2 py-1 bg-lightGray rounded-full mb-1 items-center' >
                                            <div>{e.personalProfile}</div>
                                            <Flex gap={1}>
                                                <Button shape='circle' size='small' onClick={() => editPersonalProfile(index)} ><EditFilled /></Button>
                                                <Button shape='circle' size='small' onClick={() => deletePersonalProfile(index)} ><DeleteFilled /></Button>
                                            </Flex>
                                        </div>
                                    ))
                                }
                            </ul>
                        </Col>

                    </Row>

                </Col>

            </Row >
        </div >
    );
};

export default PersonalDetailsForm;
