import React from "react";
import CustomTable from './Table/Table';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./style.css";

const OutputCard = ({
  name,
  gender,
  age,
  email,
  country,
  city,
  uploadedFile,
  date,
}) => {
  const alterName = name.split(' ').reverse().join(' ')
  const mData = uploadedFile.slice(1).map((elem) => {
    return { name: elem[0], Product: elem[1] };
  });
  return (
    <div>
      <div className="info">
        {alterName}, {gender}, {age}, <br />
        {country}, {city}, {email}
      </div>
      <span>{date}</span>
      <div className='visualInfo'>
        {uploadedFile && <CustomTable data={uploadedFile} />}
        <BarChart
          width={300}
          height={300}
          data={mData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Product" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};
export default OutputCard;
