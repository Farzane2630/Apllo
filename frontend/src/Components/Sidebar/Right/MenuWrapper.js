import React from "react";

export default function MenuWrapper({ title, img, alt, isMenuActive, setisMenuActive }) {
  return (
    <li onClick={() => setisMenuActive(true)}>
      <div className={isMenuActive ? "side-mark active" : "side-mark"}></div>
      <a href="#">
        <img src={img} alt={alt} />
        {title}
      </a>
    </li>
  );
}
