import React, { useState } from "react";
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader'
import CustomDropdown from "../../shared/Dropdown";
import moment from 'moment';
import { Input, Button,InputNumber  } from "antd";
import './style.css'

const InputCard = ({
    setName,
    setGender,
    setAge,
    setEmail,
    setCountry,
    setCity,
    setUploadedFile,
    uploadedFile,
    setDate,
    date,
    setActiveKey
}) => {
  const { TextArea } = Input;
  const [showContent,setShowContent]=useState('')
  
  return (
    <div>
      User:
      <div className="row">
        <Input placeholder="Name" style={{ maxWidth: 170 }} onChange={e=>setName(e.target.value)} />
        <InputNumber min={0} max={120} placeholder='Age' style={{ minWidth: 170 }} onChange={value=>setAge(value)} />
        <CustomDropdown name="Gender" setGender={setGender} style={{ minWidth: 170 }} />
      </div>
      <div className="row">
        <Input placeholder="Email" style={{ maxWidth: 170 }} onChange={e=>setEmail(e.target.value)}/>
        <Input placeholder="Country" style={{ maxWidth: 170 }} onChange={e=>setCountry(e.target.value)}/>
        <Input placeholder="City" style={{ maxWidth: 170 }} onChange={e=>setCity(e.target.value)} />
      </div>
      Data:
      <div className="row">
        {/* <Uploader onChange={e=>setUploadedFile(e.target.value)}/> */}
        <CSVReader onFileLoaded={(data, fileInfo) => {setUploadedFile(data) } }/>
        <Button onClick={()=>setShowContent(uploadedFile)}>Upload</Button>
        <Button name="Date" style={{ width: 170 }} onClick={()=>setDate(moment().format('MMMM Do YYYY'))}>{date?date:'Date'}</Button>
      </div>
      
      <TextArea rows={4} value={showContent} disabled/>
      <Button onClick={()=>setActiveKey(2)}>Continue</Button>
    </div>
  );
};
export default InputCard;
