import React, { useState } from 'react'
import './RightSidebar.css'
import {Link} from 'react-router-dom'
import {ToggleSimpleUsageShowcase} from '../../../UI/ToggleBtn'

export default function RightSidebar() {
    const [isLight, setIsLight] = useState(true)

    return (
        <div className='rt-sidebar' style={{ backgroundIma: ' linear-gradient(271.39deg, rgba(255, 255, 255, 0.609) 7.18%, rgba(255, 255, 255, 0.098) 98.12%), rgba(255, 255, 255, 0.5)' }}>
            <div className="apollo-logo">
                <img src="/Logos/apollo.png" alt="apollo" className='apollo-1' />
                <img src="/Logos/Group.png" alt="apollo" className='apollo-2' />
            </div>
            <div className="insurance-logo">
                <img src="/Logos/Bime-taavon-1 1.png" alt="" className='taavon-1' />
                <img src="/Logos/Bime-taavon-1 2.png" alt="" className='taavon-2' />
            </div>
            <div className="menu">
                <ul className="menu-wrapper">
                    <li className='active'>
                        <div className='side-mark active'></div>
                        <a className='active' href="#">
                            <img src="Icons/Work.png" alt="dashboard" />
                            داشبورد</a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/Folder.png" alt="" />
                            مدیریت درخواست ها</a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/2-User.png" alt="" />
                            مدیریت کاربران</a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/envelope.png" alt="" />
                            مرکز پیام</a>
                    </li>

                </ul>
            </div>
            <div className="upgrade-elem">
                <a href="#">
                    <img src="/Icons/diamond.png" alt="" />
                    <span>ارتقاء به نسخه حرفه ای</span>
                </a>
            </div>
            <div className="customize-view">
                <div className="brightness">
                    <img src="/Icons/dark-mode.png" className='dark-mode' alt="" />
                    <div className="toggle-icon" onClick={() => setIsLight(!isLight)}>
                        {/* add '.dark' / '.light/ to toggle */}
                        <img src="/Icons/toggle-ball.png" className={isLight ? 'light' : 'dark'} alt="" />
                    
                    {/* <ToggleSimpleUsageShowcase /> */}
                    </div>
                    <img src="/Icons/light-mode.png" className='light-mode' alt="" />
                </div>
                <Link to="/en" className='link'>
                    <div className="language">
                        <span>انگلیسی</span>
                        <img src="/Icons/lang-icon.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className="user-info">
                <div className="user-avatar">
                    <img src="/Avatar/main-user.png" alt="Avatar" className='profile-avatar' />
                    {/* add '.active' to show user is online */}
                    <img src="/Icons/green-ball.png" alt="status" className='profile-status active' />
                </div>
                <h3 className="user-name">
                    نرگس باقری پور
                </h3>
                <div className="user-email">
                    natalia.raiman@gmail.com
                </div>
                <div className="user-title">
                    super user
                </div>
                <div className="user-action-btns">
                    <div className="log-out-btn">
                        <a href="#">
                            <img src="/Icons/log-out.png" alt="Log-out" />
                        </a>
                    </div>
                    <div className="setting-btn">
                        <a href="#">
                            <img src="/Icons/setting.png" alt="settings" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
