import React from 'react'
import ReactDOM from 'react-dom'
import EnLeftSidebar from '../Components/Sidebar/Left/EnLeftSidebar/EnLeftSidebar'
import EnRightSidebar from '../Components/Sidebar/Right/EnRightSidebar/EnRightSidebar'
import EnHeader from '../Components/Header/EnHeader/EnHeader'
import EnFooter from '../Components/Footer/EnFooter/EnFooter'
import EnBody from '../Components/Body/EnBody/EnBody'
import '../App.css'

export default function HomeEn() {
  return(
    <div className='home-en'>
      <EnLeftSidebar />
      <div className="main-body en">
        <EnHeader />
        <div className="body-components">
          <EnBody />
          <EnRightSidebar />
        </div>
        <EnFooter />
      </div>
    </div>
  )
}
