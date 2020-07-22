import React, { useState } from "react";
import moment from 'moment';
import { Tabs } from "antd";
import InputCard from "../inputCard/InputCard";
import OutputCard from "../outputCard/OutputCard";


const Card = () => {
  const { TabPane } = Tabs;

  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [disabled, setDisabled] = useState(true);
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Tabs activeKey={activeTab} style={{ width: 700 }} onTabClick={(activeKey) => setActiveTab(activeKey)}>
      <TabPane tab="Input" key="1" style={{ border: '1px solid grey' }} >
        <InputCard
          setActiveTab={setActiveTab}
          setName={setName}
          setGender={setGender}
          gender={gender}
          setAge={setAge}
          setEmail={setEmail}
          setCountry={setCountry}
          setCity={setCity}
          setUploadedFile={setUploadedFile}
          uploadedFile={uploadedFile}
          setDate={setDate}
          date={date}
          setDisabled={setDisabled}
        />
      </TabPane>
      <TabPane tab="Output" key="2" disabled={disabled} style={{ border: '1px solid grey' }}>
        <OutputCard
          name={name}
          gender={gender}
          age={age}
          email={email}
          country={country}
          city={city}
          uploadedFile={uploadedFile}
          date={date}
          style={{ width: 900 }} />
      </TabPane>
    </Tabs >
  );
};
export default Card;
