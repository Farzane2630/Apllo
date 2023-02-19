import React from 'react';
import './PieChart'
import { PieChart, Pie, Label, Cell } from 'recharts';
import CustomLabel from './CustomLabel';

const data = [
  { name: 'در حال بررسی', value: 200 },
  { name: 'تایید شده', value: 150 },
  { name: 'رد شده', value: 300 },
  { name: 'در انتظار ارسال', value: 178 },
];
const COLORS = ['#EB5757', '#2D9CDB', '#80CB8E', '#F2994A'];

export default function EnStatusPieChart() {

  return (
    <PieChart width={140} height={170} className="pieChart">
      <Pie
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        data={data}
        cx={60}
        cy={80}
        innerRadius={50}
        outerRadius={65}
        cornerRadius={12}
        paddingAngle={-20}
        dataKey="value"
        stroke='none'
        
      >
        <Label
         width={30} position="center"
         content={<CustomLabel value2="83K"  value1="Total" font2="Montserrat" font1="Ubuntu" />}
         />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );

}
