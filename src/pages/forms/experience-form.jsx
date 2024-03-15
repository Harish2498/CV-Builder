import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col, DatePicker, Flex, Form, Input, Row, Typography, message } from 'antd'
import ButtonGroup from 'antd/es/button/button-group';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addExperience } from '../../store/slices/experienceSlice';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;


const ExperienceForm = () => {

  const [experiences, setExperiences] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (editIndex !== null) {
      values.startDate = moment(values.date[0].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      values.endDate = moment(values.date[1].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      let existingExperience = JSON.parse(localStorage.getItem('experience')) || [];
      existingExperience[editIndex] = values;
      // const newExperience = [...existingExperience, values];
      setExperiences(existingExperience);
      setEditIndex(null)
      localStorage.setItem('experience', JSON.stringify(existingExperience));
      message.success('Experience updated successFully');
    }
    else {
      values.startDate = moment(values.date[0].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      values.endDate = moment(values.date[1].$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      let existingExperience = JSON.parse(localStorage.getItem('experience')) || [];
      const newExperience = [...existingExperience, values];
      setExperiences(newExperience);
      localStorage.setItem('experience', JSON.stringify(newExperience));
      message.success('Experience added successFully');
    }
    form.resetFields();
  };

  const deleteExperience = (index) => {
    let existingExperience = JSON.parse(localStorage.getItem('experience')) || [];
    existingExperience.splice(index, 1)
    setExperiences(existingExperience);
    localStorage.setItem('experience', JSON.stringify(existingExperience));
    message.success('Experience removed successFully')
  }

  const editExperience = (index) => {
    setEditIndex(index);
    let existingExperience = JSON.parse(localStorage.getItem('experience')) || [];
    const experienceToEdit = existingExperience[index];
    if (experienceToEdit) {
      const dateMoment = [dayjs(experienceToEdit.startDate, 'DD MMM YYYY'), dayjs(experienceToEdit.endDate, 'DD MMM YYYY')];
      // console.log(dateMoment);
      form.setFieldsValue({
        jobTitle: experienceToEdit.jobTitle,
        employer: experienceToEdit.employer,
        city: experienceToEdit.city,
        country: experienceToEdit.country,
        date: dateMoment,
      })

    }

  }

  useEffect(() => {
    let existingExperience = JSON.parse(localStorage.getItem('experience')) || [];
    setExperiences(existingExperience);
  }, [])

  return (
    <div>
      <Title level={1} style={{ color: '#1677ff' }} >
        Let's work on your Experience.
      </Title>
      <Row>
        <Col span={12} >
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
                  className=' font-medium'
                  label="Job Title"
                  name="jobTitle"
                  rules={[{ required: true, message: 'Please input your Job Title!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="Employer"
                  name="employer"
                  rules={[{ required: true, message: 'Please input your employer!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="City"
                  name="city"
                  rules={[{ required: true, message: 'Please input your city!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="Country"
                  name="country"
                  rules={[{ required: true, message: 'Please input your country!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  className=' font-medium'
                  label="Date"
                  name="date"
                  // initialValue={[moment()]}
                  rules={[{ required: true, message: 'Please input your date!' }]}
                >
                  <RangePicker variant='filled' />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button danger type="primary" htmlType="submit">
                {editIndex !== null ? 'Update' : 'Add+'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} className='h-full' >
          <Row className=' border-slate-400 border-dotted max-h-96 min-h-96 overflow-auto  border-2 rounded-lg p-2 '>
            <Col span={24}>
              <ul>{
                experiences?.map((experience, index) => (
                  <div className='flex bg-lightGray rounded-full px-4 py-1 justify-between items-center mb-1 '>
                    <div>{`Working as ${experience.jobTitle} in ${experience.employer} (${experience.city}) from ${experience.startDate} to ${experience.endDate}.`}</div>
                    <Flex gap={1}>
                      <Button shape='circle' onClick={() => editExperience(index)} size='small'><EditFilled /></Button>
                      <Button shape='circle' onClick={() => deleteExperience(index)} size='small'><DeleteFilled /></Button>
                    </Flex>
                  </div>
                ))
              }
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ExperienceForm