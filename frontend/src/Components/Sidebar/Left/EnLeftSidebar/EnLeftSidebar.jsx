import React, { useState } from 'react'
import './EnLeftSidebar.css'
import { Link } from 'react-router-dom'


export default function EnLeftSidebar() {

    const [isLight, setIsLight] = useState(true)
    const [isMenuActive, setisMenuActive] = useState(false)

    return (
        <div className='rt-sidebar en' style={{ backgroundImage: ' linear-gradient(271.39deg, rgba(255, 255, 255, 0.609) 7.18%, rgba(255, 255, 255, 0.098) 98.12%), rgba(255, 255, 255, 0.5)' }}>
            <div className="apollo-logo en">
                <img src="/Logos/Group.png" alt="apollo" className='apollo-2' />
                <img src="/Logos/apollo.png" alt="apollo" className='apollo-1' />
            </div>

            <div className="menu">
                <ul className="menu-wrapper">
                    <li className='active'>
                        <div className='side-mark active'></div>
                        <a className='active' href="#">
                            <img src="Icons/Work.png" alt="dashboard" />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/Folder.png" alt="" />
                            Review requests </a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/2-User.png" alt="" />
                            Agents </a>
                    </li>
                    <li>
                        <div className="side-mark"></div>
                        <a href="#">
                            <img src="Icons/envelope.png" alt="" />
                            Messeges
                        </a>
                    </li>

                </ul>
            </div>
            <div className="upgrade-elem en">
                <a href="#">
                    <img src="/Icons/diamond.png" alt="" />
                    <span> Upgrage to Premium</span>
                </a>
            </div>
            <div className="customize-view">
                <div className="brightness">
                    <img src="/Icons/light-mode.png" className='light-mode' alt="" />
                    <div className="toggle-icon" onClick={() => setIsLight(!isLight)}>
                        {/* add '.dark' / '.light/ to toggle */}
                        <img src="/Icons/toggle-ball.png" className={isLight ? 'light' : 'dark'} alt="" />
                    </div>
                    <img src="/Icons/dark-mode.png" className='dark-mode' alt="" />
                </div>
                <Link to="/" className='link'>
                    <div className="language">
                        <span>Persian</span>
                        <img src="/Icons/lang-icon.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className="user-info en">
                <div className="user-avatar">
                    <img src="/Avatar/main-user.png" alt="Avatar" className='profile-avatar' />
                    {/* add '.active' to show user is online */}
                    <img src="/Icons/green-ball.png" alt="status" className='profile-status active en' />
                </div>
                <h3 className="user-name en mons">
                    Natalia Raiman
                </h3>
                <div className="user-email en mons">
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
