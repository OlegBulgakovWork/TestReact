import React, { useState } from "react";
import { Tabs } from "antd";
import InputCard from "../inputCard/InputCard";
import OutputCard from "../outputCard/OutputCard";


const Card = () => {
  const { TabPane } = Tabs;

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [date, setDate] = useState("");

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Input" key="1">
        <InputCard
          setName={setName}
          setGender={setGender}
          setAge={setAge}
          setEmail={setEmail}
          setCountry={setCountry}
          setCity={setCity}
          setUploadedFile={setUploadedFile}
          uploadedFile={uploadedFile}
          setDate={setDate}
          date={date}
        />
      </TabPane>
      <TabPane tab="Output" key="2">
      <OutputCard
          name={name}
          gender={gender}
          age={age}
          email={email}
          country={country}
          city={city}
          uploadedFile={uploadedFile}
          date={date}
        style={{maxWidth:900}}/>
      </TabPane>
    </Tabs>
  );
};
export default Card;
