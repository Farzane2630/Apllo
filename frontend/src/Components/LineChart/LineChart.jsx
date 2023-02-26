import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from './CustomTooltip'

export default function Example() {

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

  const [lineLabel, setLineLabel] = useState("")
  const [btnColor, setBtnColor] = useState('')
  const [index, setIndex] = useState('')
  let [targetVal, setTargetVal] = useState(null)
  // let progressAxis
  // let doneAxis
  // let rejectedAxis

  // useEffect(() => {
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

  const mouseHandlr = (e) => {
    if (e.isTooltipActive) {
      setIndex(e.activeTooltipIndex);
    }
  }
  // }, [lineLabel, btnColor])



  return (
    <div style={{ width: "inherit" }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          onMouseMove={mouseHandlr}
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
          <Tooltip offset="0"
            content={<CustomTooltip
              btnColor={btnColor}
              lineTitle={lineLabel}
              targetValue={!targetVal ? 0 : targetVal}
            />}
            trigger="hover" />
          <Line onMouseMove={progressAxis} type="monotone" index="x" dataKey="inProgress" stroke="rgba(92, 231, 123, 0.8)" dot={false} strokeWidth={5} />
          <Line onMouseMove={doneAxis} type="monotone" dataKey="Done" stroke="rgba(92, 185, 231, 0.8)" dot={false} strokeWidth={5} />
          <Line onMouseMove={rejectedAxis} type="monotone" dataKey="Rejected" stroke="rgba(235, 87, 87, 0.8)" dot={false} strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

}
