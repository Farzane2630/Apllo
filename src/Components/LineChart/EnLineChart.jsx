import React, { PureComponent } from 'react';
import EnCustomTooltip from './EnCustomTooltip'

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
    x: '1',
    Done: '30',
    inProgress: '110',
    Rejected: '50'
  },
  {
    x: '5',
    Done: '100',
    inProgress: '90',
    Rejected: '15'
  },
  {
    x: '10',
    Done: '40',
    inProgress: '200',
    Rejected: '30'
  },
  {
    x: '15',
    Done: '220',
    inProgress: '150',
    Rejected: ''
  },
  {
    x: '20',
    Done: '200',
    inProgress: '30',
    Rejected: '40'
  },
  {
    x: '25',
    Done: '400',
    inProgress: '100',
    Rejected: '15'
  },
  {
    x: '30',
    Done: '250',
    inProgress: '25',
    Rejected: '70'
  }
]

export default function EnLineChart() {
  const [lineLabel, setLineLabel] = useState("")
  const [index, setIndex] = useState('')
  let [targetVal, setTargetVal] = useState(null)
  
  const progressAxis = (e) => {
    setBtnColor("inProgress")
    setLineLabel("در حال بررسی")
    setTargetVal(e.points[index].payload.inProgress)
  }
  const doneAxis = (e) => {
    setBtnColor("Done")
    setLineLabel("تائید شده")
    setTargetVal(e.points[index].payload.Done)
  }
  const rejectedAxis = (e) => {
    setBtnColor("Rejected")
    setLineLabel("رد شده")
    setTargetVal(e.points[index].payload.Rejected)
  }

  const mouseHandler = (e) => {
    if (e.isTooltipActive) {
      setIndex(e.activeTooltipIndex);
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          onMouseMove={mouseHandler}
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeLinejoin="3 3" stroke='rgba(236, 233, 241, 0.5)' />
          <XAxis dataKey="x" />
          <YAxis type="number" domain={[0, 500]} />
          <Tooltip offset="10"
            content={<EnCustomTooltip
              lineTitle={lineLabel}
              targetValue={targetVal}
            />}
            trigger="hover" />
          <Line type="monotone" onMouseMove={progressAxis} dataKey="Done" stroke="rgba(92, 231, 123, 0.8)" dot={false} strokeWidth={5} />
          <Line type="monotone" onMouseMove={doneAxis} dataKey="inProgress" stroke="rgba(92, 185, 231, 0.8)" dot={false} strokeWidth={5} />
          <Line type="monotone" onMouseMove={rejectedAxis} dataKey="Rejected" stroke="rgba(235, 87, 87, 0.8)" dot={false} strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

}
