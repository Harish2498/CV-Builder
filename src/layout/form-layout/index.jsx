import { Col, Flex, Layout, Row } from 'antd';
const { Sider, Content, Header } = Layout;
import React, { useEffect, useState } from 'react';
import { Steps, Button, message } from 'antd';
import { steps } from './steps';
import { Outlet, useNavigate } from 'react-router-dom';
import Resume from '../../templates/basic-template';
import ResumePreview from '../../pages/resume-preview';

const { Step } = Steps;

const CurrentStep = () => {
    const path = window.location.pathname;
    const index = steps.findIndex(step => path.includes(step.link))
    return index;
}

const FormLayout = () => {
    const [current, setCurrent] = useState(CurrentStep);
    const [resumePreview, setResumePreview] = useState(false)
    const navigate = useNavigate();

    const next = () => {
        setCurrent(current + 1);
        navigate(steps[current + 1].link);
    };

    const prev = () => {
        setCurrent(current - 1);
        navigate(steps[current - 1].link);
    };

    const handleFinish = () => {
        message.success('Form submitted successfully!');
    };

    

    


    return (
        <Layout className=' h-dvh '>
            <Sider width="20%" theme='light' className='flex justify-center items-center' style={{ backgroundColor: '#fafcff' }} >
                <div className=' text-5xl text-primary font-bold text-center mb-10'>Resume</div>
                <Steps direction="vertical" current={current} className=' h-96'>
                    {steps.map((item, index) => (
                        <Step
                            key={item.title}
                            title={item.title}
                            icon={item.icon}

                        />
                    ))}
                </Steps>
            </Sider>
            <Layout>
                <Header className=' bg-primary'  >
                    <Flex className='h-full justify-end items-center'>
                        <Button onClick={() => setResumePreview(true)} >Preview</Button>
                    </Flex>
                </Header>
                <Content className='bg-white' >
                    <div className='h-full flex flex-col gap-4'>
                        <Row className=' p-2' style={{ minHeight: '87%', maxHeight: '87%' }}>
                            <Col span={24} className='h-full'>
                                <Outlet />
                            </Col>
                        </Row>
                        <Row className=' px-10 ' style={{ minHeight: '10%', maxHeight: '10%' }}>
                            <Col span={24} className='h-10'>
                                <div className='flex items-center justify-between'>
                                    <Button danger disabled={current > 0 ? false : true} type="primary" onClick={prev}>
                                        Back
                                    </Button>
                                    {current < steps.length - 1 && (
                                        <Button danger type="primary" onClick={next}>
                                            Next
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button danger type="primary" onClick={()=>setResumePreview(true)}>
                                            Preview
                                        </Button>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
            <ResumePreview
                open={resumePreview}
                setOpen={setResumePreview}
                // personalDetails={personalDetails}
                // personalProfile={personalProfile}
                // experience={experience}
                // education={education}
                // project={project}
                // projectResponsibility={projectResponsibility}
                // skills={skills}
            />
        </Layout >
    )
};
export default FormLayout;