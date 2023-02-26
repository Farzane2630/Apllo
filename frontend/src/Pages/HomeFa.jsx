import React from 'react'
import Header from "../Components/Header/Header";
import LeftSidebar from "../Components/Sidebar/Left/LeftSidebar";
import RightSidebar from "../Components/Sidebar/Right/RightSidebar";
import Footer from  '../Components/Footer/Footer'
import Body from "../Components/Body/Body";

export default function HomeFa() {
  return (
    <>
    <RightSidebar />
    <div className="main-body">
      <Header />
      <div className="body-components">
        <Body />
      <LeftSidebar />
       </div>
      <Footer />
    </div>
  </>
  )
}
