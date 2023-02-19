import React from 'react'
import './LeftSidebar.css'

export default function LeftSidebar() {
  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-top">
        <div className="left-top-header">
          نفرات برتر چالش
        </div>
        <div className="top-users-container">
          <div className="top-user">
            <img src="/Icons/crown.png" alt="" className="top-user-crown" />
            <img src="/avatar/topuser-1.png" alt="" className="top-user-avatar" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name">مریم میرزاخانی</div>
              <div className="top-user-score-box">
                <div className="score-number">
                  تعداد: ۲۱۰۸۰
                </div>
                <div className="score-day">
                  در: ۱۲۸ روز
                </div>
              </div>
            </div>
          </div>
          <div className="top-user-hr" />
          <div className="top-user">
            <img src="/avatar/topuser-2.png" alt="" className="top-user-avatar" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name"> زهرا ابراهیمی</div>
              <div className="top-user-score-box">
                <div className="score-number">
                  تعداد: ۱۹۰۸
                </div>
                <div className="score-day">
                  در: ۱۰۲ روز
                </div>
              </div>
            </div>
          </div>
          <div className="top-user-hr" />
          <div className="top-user">
            <img src="/avatar/topuser-3.png" alt="" className="top-user-avatar" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name"> محمدحسین دهقانی نژاد</div>
              <div className="top-user-score-box">
                <div className="score-number">
                  تعداد: ۱۸۱۲
                </div>
                <div className="score-day">
                  در: ۸۶ روز
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="top-seller-challenge">
  <img src="/Icons/cup-icon.png" alt="" className="cup-icon" />
  <div className="top-seller-details">
    <span>چالش بهترین فروشنده</span>
    <div className="more-info">مشاهده اطلاعات بیشتر .. </div>
  </div>
</div>
      </div>
      <div className="left-sidebar-bottom">
        <img src="/Images/cover.png" alt="" />
      </div>
    </div>
  )
}
