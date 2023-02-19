import React, { PureComponent } from 'react';
import CustomTooltip from './CustomTooltip'

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
      name: '0',
      Done: 200,
      inProgress: 100,
      Rejected: 345,
    },
    {
      name: '5',
      Done: 125,
      inProgress: 98,
      Rejected: 284,
    },
    {
      name: '10',
      Done: 200,
      inProgress: 300,
      Rejected: 200,
    },
    {
      name: '15',
      Done: 280,
      inProgress: 248,
      Rejected: 100,
    },
    {
      name: '20',
      Done: 390,
      inProgress: 200,
      Rejected: 400,
    },
    {
      name: '25',
      Done: 400,
      inProgress: 250,
      Rejected: 500,
    },
    {
      name: '30',
      Done: 315,
      inProgress: 150,
      Rejected: 300,
    },
  ]; 
   

export default class EnLineChart extends PureComponent {
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
            <CartesianGrid strokeLinejoin="3 3" stroke='rgba(236, 233, 241, 0.5)' />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 500]}/>
            <Tooltip content={<CustomTooltip />}  />
            <Line type="monotone" dataKey="inProgress" stroke="rgba(92, 231, 123, 0.8)"  dot={false} strokeWidth={5} />
            <Line type="monotone" dataKey="Done" stroke="rgba(92, 185, 231, 0.8)"  dot={false} strokeWidth={5} />
            <Line type="monotone" dataKey="Rejected" stroke="rgba(235, 87, 87, 0.8)"  dot={false} strokeWidth={5} /> 
           </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
