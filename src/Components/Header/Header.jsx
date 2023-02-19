import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-right-side">
                <div className="search-box">
                    <img src="/Icons/Search.png" alt="search" className='search-icon' />
                    <input type="text" className="search-input" placeholder='| جستجو    (شماره درخواست، موبایل، نام و ...)' />
                </div>
            </div>
            <div className="header-left-side">
                <div className="billing">
                    <img src="/Icons/down-drop.png" alt="" />
                    <span>اعتبار موجود</span>
                    ۱۳۰٫۰۰۰
                    <span>تومان</span>
                </div>
                <div className="charging-account">
                    <img src="/Icons/Plus.png" alt="" />
                    افزایش موجودی
                </div>
                <div className="new-request">
                    <div className="drop-down-menu">
                        <img src="/Icons/drop-down-white.png" alt="" />
                    </div>
                    درخواست جدید
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
