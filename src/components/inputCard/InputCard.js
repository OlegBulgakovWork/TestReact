import React, { useState, useEffect } from "react";
import CSVReader from 'react-csv-reader';
import CustomDropdown from "../../shared/Dropdown";
import moment from 'moment';
import { Input, Button, InputNumber, Form, message, DatePicker, Modal } from "antd";
import './style.css'

const InputCard = ({
  setName,
  setGender,
  gender,
  setAge,
  setEmail,
  setCountry,
  setCity,
  setUploadedFile,
  uploadedFile,
  setDate,
  setDisabled,
  setActiveTab
}) => {
  const [form] = Form.useForm();

  const dateFormat = 'YYYY-MM-DD';
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const { TextArea } = Input;
  const [showContent, setShowContent] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [CSVInfo, setCSVInfo] = useState('')

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      if (showContent) {
        setUploadedFile(showContent.split('\n').map(e => e.split(',')))
        setDisabled(false)
        setActiveTab('2')
      }
      else (message.warning('Upload file or add some info to Text area to continue'))

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }


  const disabledDate = (current) => {

    return current > moment().endOf('day');
  }

  const handleUpload = () => {
    showContent ? setShowModal(true) :
      setShowContent(uploadedFile.reduce(function (a, b) {
        return `${a}\n${b}`
      }))
    console.log('222222222222222222', showContent);
  }

  return (
    <div>
      User:
      <Form form={form} name="dynamic_rule">
        <div className="row">
          <Modal
            title='Warning'
            centered
            visible={showModal}
            onOk={() => {
              setShowContent(uploadedFile.reduce(function (a, b) {
                return `${a}\n${b}`;
              }))
              setShowModal(false)
            }}
            onCancel={() => setShowModal(false)}
          >
            <p>Do you really want to replace Text area data?</p>
          </Modal>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                pattern: /^[a-zA-Z_]+( [a-zA-Z_]+)*$/,
                message: 'Please use only letters',
              },
            ]}
          >
            <Input placeholder="Please input your name" style={{ maxWidth: 170 }} onChange={e => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input age(0-120)',
              },
            ]}
          >
            <InputNumber min={0} max={120} placeholder='Please input your age' style={{ minWidth: 170 }} onChange={value => setAge(value)} />
          </Form.Item>

          <CustomDropdown name={gender} setGender={setGender} />
        </div>

        <div className="row">
          <Form.Item
            name="email"

            rules={[
              {
                required: true,
                pattern: emailRegEx,
                message: 'Example:asd@asd.com',
              },
            ]}
          >
            <Input placeholder="Please input your email" style={{ maxWidth: 170 }} onChange={e => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="country"

            rules={[
              {
                required: true,
                min: 3,
                message: 'Minimum 3 symbols',
              },
            ]}
          >
            <Input placeholder="Country" style={{ maxWidth: 170 }} onChange={e => setCountry(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                min: 3,
                message: 'Minimum 3 symbols',
              },
            ]}
          >
            <Input placeholder="Please input your city" style={{ maxWidth: 170 }} onChange={e => setCity(e.target.value)} />
          </Form.Item>

        </div>
      Data:
      <div className="row">
          <CSVReader onFileLoaded={(data, fileInfo) => { setUploadedFile(data); setCSVInfo(fileInfo) }} />
          <Button disabled={!CSVInfo} onClick={handleUpload}>Upload</Button>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: 'Please pick date',
              },
            ]}
          >
            <DatePicker style={{ width: 170 }} disabledDate={disabledDate} format={dateFormat} onChange={(date, dateString) => setDate(dateString)}></DatePicker>
          </Form.Item>
        </div>

        <TextArea value={showContent} onChange={(e) => {
          setShowContent(e.target.value)
        }} />
        <div className='continue'>
          <Button onClick={handleSubmit} style={{ width: 170 }} >Continue</Button>
        </div>
      </Form >
    </div >
  );
};
export default InputCard;

