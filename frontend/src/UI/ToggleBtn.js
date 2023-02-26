import React from "react";
import { Toggle } from "@ui-kitten/components";

export const ToggleSimpleUsageShowcase = () => {
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const style = {
    margin: "0 5px",
    height: "15px",
    width: "30px",
    background: "#FFFFFF",
    border: "1.5px solid rgba(0, 52, 89, 0.1)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Toggle checked={checked} onChange={onCheckedChange} style={style}></Toggle>
  );
};
