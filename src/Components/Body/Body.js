import React from "react";
import BodyTop from "./BodyTop/BodyTop";
import BodyBottom from "./BodyBottom/BodyBottom";

export default function Body() {
  return (
    <div className="core-body">
      <BodyTop />
      <BodyBottom />
    </div>
  );
}
