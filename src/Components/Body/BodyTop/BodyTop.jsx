import React from 'react'
import StatusPieChart from '../../PieChart/PieChart'
import './BodyTop.css'

export default function BodyTop() {
  return (
    <div className='body-top'>
      <div className="body-top-right">
        <img src="/Images/new-robat.png" alt="" />
        <a href='#'>
          <button className="activate-btn" />
        </a>
      </div>
      <div className="body-top-left">
        <ul>
          <li><a href="#">
            <img src="/Icons/folder-2.png" alt="" />
            {/* پوشه
            درخواست‌ها */}
          </a></li>
          <li><a href="#">
            <img src="/Icons/user-group.png" alt="" />
          </a></li>
          <li><a href="#">
            <img src="/Icons/car-1.png" alt="" />
          </a></li>
          <li><a href="#">
            <img src="/Icons/chat-1.png" alt="" />
          </a></li>
          <li><a href="#">
            <img src="/Icons/diamond.png" alt="" />
          </a></li>
        </ul>
        <div className="pie-chart-container">
          <div className="pie-chart-header">
            <span>پیش‌نمایش</span>
            <img src="/Icons/three-dots.png" alt="see more" />
          </div>
          <div className="pie-chart-body">
            <StatusPieChart />
            <div className="statistics">
              <div className="guide">
                <div className="pattern green">
                  <img src="/Icons/chart-green.png" alt="" />
                  ۱۸۰۰۹
                </div>
                <button className='green-status-btn'>در حال بررسی</button>
              </div>

              <div className="guide">
                <div className="pattern blue">
                  <img src="/Icons/chart-blue.png" alt="" />
                  ۳۶۰۲۱
                </div>
                <button className='blue-status-btn'> تایید شده </button>

              </div>
              <div className="guide">
                <div className="pattern orange">
                  <img src="/Icons/chart-red.png" alt="" />
                  ۹۰۳۴
                </div>
                <button className='red-status-btn'>رد شده  </button>
              </div>
              <div className="guide">
                <div className="pattern">
                  <img src="/Icons/chart-orange.png" alt="" />
                  ۲۰۰۲۱
                </div>
                <button className='orange-status-btn'> در انتظار ارسال </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
