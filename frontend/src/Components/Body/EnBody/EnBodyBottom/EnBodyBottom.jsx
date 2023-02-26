import React from 'react'
import LineChart from '../../../LineChart/LineChart'

export default function EnBodyBottom() {
  return (
    <div className='body-bottom'>
      <div className="body-bottom-header">
        <div className="body-bottom-title mons en">
        Statistics
        </div>
        <div className="body-bottom-actions">
          <div className="status-guide">
            <div className="pendding">
              <button className='blue-status-btn'>Done</button>
              <img src="/Icons/inner-blue.png" alt="" />
            </div>
            <div className="accepted">
              <button className='green-status-btn green'> in progress </button>
              <img src="/Icons/inner-green.png" alt="" />
            </div>
            <div className="declined">
              <button className='red-status-btn'> Rejected </button>
              <img src="/Icons/inner-red.png" alt="" />
            </div>
          </div>
          <div className="log">
            <img src="/Icons/down-drop.png" alt="" />
            Last 30 days
          </div>
        </div>
      </div>

      <div className="body-bottom-chart">  
      <LineChart />  
      </div>
    </div>
  )
}
