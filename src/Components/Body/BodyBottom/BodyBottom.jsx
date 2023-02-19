import React from 'react'
import LineChart from '../../LineChart/LineChart'
import './BodyBottom.css'

export default function BodyBottom() {
  return (
    <div className='body-bottom'>
      <div className="body-bottom-header">
        <div className="body-bottom-title">
          آمار استفاده
        </div>
        <div className="body-bottom-actions">
          <div className="status-guide">
            <div className="pendding">
              <button className='blue-status-btn'>تاییدشده</button>
              <img src="/Icons/inner-blue.png" alt="" />
            </div>
            <div className="accepted">
              <button className='green-status-btn green'>  در حال بررسی </button>
              <img src="/Icons/inner-green.png" alt="" />
            </div>
            <div className="declined">
              <button className='red-status-btn'>رد شده  </button>
              <img src="/Icons/inner-red.png" alt="" />
            </div>
          </div>
          <div className="log">
            <img src="/Icons/down-drop.png" alt="" />
            ۳۰ روز گذشته
          </div>
        </div>
      </div>

      <div className="body-bottom-chart">  
      <LineChart />  
      </div>
    </div>
  )
}
