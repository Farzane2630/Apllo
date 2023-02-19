import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: '',
    uv: 200,
    pv: 100,
    xv: 345,
    amt: 2400
  },
  {
    name: '5',
    uv: 125,
    pv: 98,
    xv: 284,
    amt: 2210
  },
  {
    name: '10',
    uv: 200,
    pv: 300,
    xv: 200,
    amt: 2290,
  },
  {
    name: '15',
    uv: 280,
    pv: 248,
    xv: 100,
    amt: 2000,
  },
  {
    name: '20',
    uv: 390,
    pv: 200,
    xv: 400,
    amt: 2181,
  },
  {
    name: '25',
    uv: 100,
    pv: 250,
    xv: 100,
    amt: 2500,
  },
  {
    name: '30',
    uv: 315,
    pv: 150,
    xv: 300,
    amt: 2100
  },
];  

export default class Example extends PureComponent {
  render() {
    return (
        <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[20, 300]}/>
            <Tooltip TValue=""  />
            <Line type="monotone" dataKey="pv" stroke="rgba(92, 231, 123, 0.8)"  dot={false} strokeWidth={5} />
            <Line type="monotone" dataKey="uv" stroke="rgba(92, 185, 231, 0.8)"  dot={false} strokeWidth={5} />
            <Line type="monotone" dataKey="xv" stroke="rgba(235, 87, 87, 0.8)"  dot={false} strokeWidth={5} /> 
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
