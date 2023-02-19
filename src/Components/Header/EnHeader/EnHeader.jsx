import React from 'react'
import './EnHeader.css'

export default function EnHeader() {
  return (
    <div className='header en'>
    <div className="header-right-side">
        <div className="search-box">
            <img src="/Icons/Search.png" alt="search" className='search-icon' />
            <input type="text" className="search-input" placeholder='|  Search fo name, mobile and etc.' />
        </div>
    </div>
    <div className="header-left-side">
        <div className="billing en">
            <img src="/Icons/down-drop.png" alt="" />
            <span>Balance € 385 </span>
        </div>
        <div className="charging-account en">
            <img src="/Icons/Plus.png" alt="" />
            Increase Credit
        </div>
        <div className="new-request">
            <div className="drop-down-menu en">
                <img src="/Icons/drop-down-white.png" alt="" />
            </div>
            Increase Credit
        </div>
        <div className="notifications">
            <img src="/Icons/Notification.png" alt="Notifications" />
            <span className='notif-sign'>
                <img src="/Icons/red-ball.png" alt="" />
            </span>
        </div>
    </div>
</div>
  )
}
