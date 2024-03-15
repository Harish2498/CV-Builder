import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col, DatePicker, Flex, Form, Input, Row, Typography, message } from 'antd'
import dayjs from 'dayjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;


const EducationForm = () => {

  const [education, setEducation] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (editIndex !== null) {
      values.passingDate = moment(values.date.$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      let existingEducation = JSON.parse(localStorage.getItem('education')) || [];
      existingEducation[editIndex] = values;
      setEducation(existingEducation);
      setEditIndex(null);
      localStorage.setItem('education', JSON.stringify(existingEducation));
      message.success('Education updated successFully')
    }
    else {
      console.log(values);
      values.passingDate = moment(values.date.$d, 'ddd MMM DD YYYY HH:mm:ss ZZ').format('DD MMM YYYY');
      let existingEducation = JSON.parse(localStorage.getItem('education')) || [];
      const newEducation = [...existingEducation, values];
      setEducation(newEducation);
      localStorage.setItem('education', JSON.stringify(newEducation));
      message.success('Education added successFully')
    }
    form.resetFields();
  };

  const deleteEducation = (index) => {
    let existingEducation = JSON.parse(localStorage.getItem('education')) || [];
    existingEducation.splice(index, 1)
    setEducation(existingEducation);
    localStorage.setItem('education', JSON.stringify(existingEducation));
    message.success('Education removed successFully')
  }

  const editEducation = (index) => {
    setEditIndex(index);
    let existingEducation = JSON.parse(localStorage.getItem('education')) || [];
    const educationToEdit = existingEducation[index];
    if (educationToEdit) {
      const dateMoment = dayjs(educationToEdit.passingDate, 'DD MMM YYYY');
      console.log(dateMoment);
      // Set the profile to edit into the TextArea
      form.setFieldsValue(
        {
          instituteName: educationToEdit.instituteName,
          location: educationToEdit.location,
          degree: educationToEdit.degree,
          fieldOfStudy: educationToEdit.fieldOfStudy,
          date: dateMoment
        }
      );
    }
  }

  useEffect(() => {
    let existingEducation = JSON.parse(localStorage.getItem('education')) || [];
    setEducation(existingEducation);
  }, [])

  return (
    <div>
      <Title level={1} style={{ color: '#1677ff' }} >
        Tell us about your education.
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
                  className=' font-medium'
                  label="Institute Name"
                  name="instituteName"
                  rules={[{ required: true, message: 'Please input your Institue Name!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please input your location!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="Degree"
                  name="degree"
                  rules={[{ required: true, message: 'Please input your degree!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  className=' font-medium'
                  label="Field of study"
                  name="fieldOfStudy"
                  rules={[{ required: true, message: 'Please input your field of study!' }]}
                >
                  <Input variant='filled' />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  className=' font-medium'
                  label="Passing Date"
                  name="date"
                  rules={[{ required: true, message: 'Please input your date!' }]}
                >
                  {/* <RangePicker variant='filled' /> */}
                  <DatePicker variant='filled' />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              className=' font-medium'>
              <Button danger type="primary" htmlType="submit">
                {editIndex !== null ? 'Update' : 'Add +'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} className='h-full'>
          <Row className=' border-slate-400 border-dotted max-h-96 min-h-96 overflow-auto  border-2 rounded-md p-2 '>
            <Col span={24}>
              <ul>{
                education?.map((education, index) => (
                  <div className='flex bg-lightGray rounded-full px-4 py-1 justify-between items-center mb-1 '>
                    <div>{` ${education.degree} in ${education.fieldOfStudy}  from ${education.instituteName} (${education.location}) on ${education.passingDate}.`}</div>
                    <Flex gap={1}>
                      <Button shape='circle' size='small' onClick={() => editEducation(index)} ><EditFilled /></Button>
                      <Button shape='circle' size='small' onClick={() => deleteEducation(index)} ><DeleteFilled /></Button>
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

export default EducationForm;