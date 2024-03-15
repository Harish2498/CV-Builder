import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col, DatePicker, Flex, Form, Input, Row, Typography, message } from 'antd'
import React, { useEffect, useState } from 'react'
import ProjectPreview from '../projects-preview';
import moment from 'moment';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;


const ProjectForm = () => {

  const [projectResponsibility, setProjectResponsibility] = useState([]);
  const [projectPreview, setProjectPreview] = useState(false);
  const [editProjectResponsibilitiesIndex, setEditProjectResponsibilitiesIndex] = useState(null);
  const [editProjectIndex, setEditProjectIndex] = useState(null);

  const [form] = Form.useForm();
  const [formSecond] = Form.useForm();

  const handleProjectPreview = () => {
    setProjectPreview(true)
  }

  const onFinish = (values) => {
    if (projectResponsibility.length) {

      if (editProjectIndex !== null) {
        values.projectResponsibility = projectResponsibility;
        values.startDate = moment(values.date[0].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
        values.endDate = moment(values.date[1].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
        let existingProject = JSON.parse(localStorage.getItem('project')) || [];
        existingProject[editProjectIndex] = values;
        // const newProject = [...existingProject, values];
        localStorage.setItem('project', JSON.stringify(existingProject));
        setProjectResponsibility([])
        message.success('Project updated sucessfully');
      }
      else {
        values.projectResponsibility = projectResponsibility;
        values.startDate = moment(values.date[0].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
        values.endDate = moment(values.date[1].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
        let existingProject = JSON.parse(localStorage.getItem('project')) || [];
        const newProject = [...existingProject, values];
        localStorage.setItem('project', JSON.stringify(newProject));
        setProjectResponsibility([])
        message.success('Project added sucessfully');
      }
      form.resetFields();
      formSecond.resetFields();
    } else {
      message.error('Enter your Project Role and Responsibility')
    }

  };

  const onFinishSecondForm = (values) => {
    if (editProjectResponsibilitiesIndex !== null) {
      setProjectResponsibility((pv) => {
        let updatedResponsibilities = [...pv];
        updatedResponsibilities[editProjectResponsibilitiesIndex] = values;
        return updatedResponsibilities;
      });
      setEditProjectResponsibilitiesIndex(null);
    } else {
      setProjectResponsibility((pv) => [...pv, values]);
    }
    formSecond.resetFields();
  };


  const deleteProjectResponsibility = (index) => {
    const updatedResponsibilities = [...projectResponsibility];
    updatedResponsibilities.splice(index, 1);
    setProjectResponsibility(updatedResponsibilities);
  };

  const editProjectResponsibility = (index) => {
    setEditProjectResponsibilitiesIndex(index);
    const projectResponsibilityToEdit = projectResponsibility[index];
    console.log(projectResponsibilityToEdit);
    if (projectResponsibilityToEdit) {
      formSecond.setFieldsValue({
        'projectResponsibility': projectResponsibilityToEdit.projectResponsibility
      })
    }

  }

  const editProject = (index) => {
    let existingProject = JSON.parse(localStorage.getItem('project')) || [];
    const projectToEdit = existingProject[index];
    console.log(index);
    if (projectToEdit) {
      const dateMoment = [dayjs(projectToEdit.startDate, 'DD MMM YYYY'), dayjs(projectToEdit.endDate, 'DD MMM YYYY')];
      form.setFieldsValue({
        projectTitle: projectToEdit.projectTitle,
        role: projectToEdit.role,
        description: projectToEdit.description,
        technologies: projectToEdit.technologies,
        date: dateMoment
      })
      setProjectResponsibility(projectToEdit.projectResponsibility);
    }
  }







  return (
    <div>
      <Flex className='items-center justify-between'>
        <Title level={1} style={{ color: '#1677ff' }} >
          Let's add your projects you worked on.
        </Title>
        <Button onClick={handleProjectPreview} type='primary'>See your projects</Button>
      </Flex>
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
                  label="Project title"
                  name="projectTitle"
                  rules={[{ required: true, message: 'Please input your project title!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className=' font-medium mb-1'
                  label="Role"
                  name="role"
                  rules={[{ required: true, message: 'Please input your role!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  className=' font-medium mb-1'
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: 'Please input your description number!' }]}
                >
                  <TextArea variant='filled' rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  className='font-medium mb-1'
                  label="Tools and Technologies"
                  name="technologies"
                  rules={[{ required: true, message: 'please input your tools' }]}
                >
                  <Input variant='filled' />

                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  className=' font-medium '
                  label="Date"
                  name="date"
                  rules={[{ required: true, message: 'Please input your date!' }]}
                >
                  <RangePicker variant='filled' />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              className=' font-medium'>
              <Button danger type="primary" htmlType="submit">
                {editProjectIndex !== null ? 'Update' : 'Add+'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} className='  h-96 overflow-auto'>
          <Row>
            <Col span={24}>
              <Form
                form={formSecond}
                name="basic"
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={onFinishSecondForm}
                style={{ margin: '0 auto' }}
              >
                <Form.Item
                  className='font-medium mb-1  '
                  label="Project Roles and Responsibility"
                  name="projectResponsibility"
                  rules={
                    [{ required: true, message: 'Please enter Roles and Responsibility ' }]
                  }
                >
                  <TextArea className='mb-2' variant='filled' rows={3} />

                </Form.Item>
                <Form.Item>
                  <Button size='small' htmlType='submit'>{editProjectResponsibilitiesIndex !== null ? 'update' : 'Add+'}</Button>
                </Form.Item>

              </Form>
            </Col>
          </Row>
          <Row className='border-slate-400 border-dotted rounded-md p-2 border-2 h-48 overflow-auto'>
            <Col span={24}>
              <ul>
                {
                  projectResponsibility?.map((e, index) => (
                    <div key={index} className='flex bg-lightGray rounded-full px-4 py-1 justify-between items-center mb-1' >
                      <div>{e.projectResponsibility}</div>
                      <Flex>
                        <Button shape='circle'
                          onClick={() => editProjectResponsibility(index)}
                          size='small'>
                          <EditFilled />
                        </Button>
                        <Button shape='circle'
                          onClick={() => deleteProjectResponsibility(index)}
                          size='small'>
                          <DeleteFilled />
                        </Button>
                      </Flex>
                    </div>
                  ))
                }
              </ul>
            </Col>

          </Row>

        </Col>
      </Row>
      <ProjectPreview open={projectPreview} setOpen={setProjectPreview} setEditProjectIndex={setEditProjectIndex} editProject={editProject} />
    </div>
  )
}

export default ProjectForm;