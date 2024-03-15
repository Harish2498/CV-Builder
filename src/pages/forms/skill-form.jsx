import { Button, Col, DatePicker, Flex, Form, Input, Rate, Row, Typography, message } from 'antd'
import React, { useState } from 'react'
import SkillsPreview from '../skills-preview';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;

const existingSkills = JSON.parse(localStorage.getItem('skills')) || {};

const SkillForm = () => {
    const [skillsPreview, setSkillsPreview] = useState(false);

    const handleSkillsPreview = () => {
        setSkillsPreview(true)
    }

    const onFinish = (values) => {
        // let existingSkills = JSON.parse(localStorage.getItem('skills')) || [];
        // const newSkills = [...existingSkills, values];
        localStorage.setItem('skills', JSON.stringify(values));
        message.success('Skills added successfully');
    };
    return (
        <div>
            <Flex className='items-center justify-between'>
                <Title level={1} style={{ color: '#1677ff' }} >
                    Add your skills.
                </Title>
                <Button onClick={handleSkillsPreview} type='primary'>See your skills</Button>
            </Flex>

            <Row>
                <Col span={24} className='h-96 overflow-auto' >

                    <Form
                        name="basic"
                        layout='vertical'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{ maxWidth: '500px', margin: '0 auto' }}
                    >

                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.projectManagementTools}
                            label="Project Management Tools & Approach"
                            name="projectManagementTools"
                            rules={[{ required: true, message: 'Please input your Project Management Tools & Approach!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.frontendTechnologies}
                            label="Frontend/Web Technologies"
                            name="frontendTechnologies"
                            rules={[{ required: true, message: 'Please input your Frontend/Web Technologies!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.backendTechnologies}
                            label="Backend/Web Technologies"
                            name="backendTechnologies"
                            rules={[{ required: true, message: 'Please input your Backend/Web Technologies!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.databases}
                            label="Databases"
                            name="databases"
                            rules={[{ required: true, message: 'Please input your Databases!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.WebApplicationServer}
                            label="Web/Application Server"
                            name="WebApplicationServer"
                            rules={[{ required: true, message: 'Please input your Web/Application Server!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.ide}
                            label="IDE's"
                            name="ide"
                            rules={[{ required: true, message: "Please input your IDE's!" }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>
                        <Form.Item
                            className=' font-medium'
                            initialValue={existingSkills.repositoryTools}
                            label="Repository tools"
                            name="repositoryTools"
                            rules={[{ required: true, message: 'Please input your Repository tools!' }]}
                        >
                            <Input variant='filled' />
                        </Form.Item>

                        <Form.Item
                            className=' font-medium'
                        >
                            <Button danger type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <SkillsPreview open={skillsPreview} setOpen={setSkillsPreview} />
        </div>
    )
}

export default SkillForm;