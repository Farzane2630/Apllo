import React from "react";

export default function CustomLabel(props) {
  const { cx, cy } = props.viewBox;
  return (
    <>
      <text
        x={cx}
        y={cy - 5}
        fill="#11263C"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontSize="40px" fontFamily={props.font2}>
          {props.value2}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 20}
        fill="#11263C"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="left"
      >
        <tspan fontSize="11px" fontFamily={props.font3}>
          {props.value3}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 35}
        fill="#11263C"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="13px" fontFamily={props.font1}>
          {props.value1}
        </tspan>
      </text>
    </>
  );
}
