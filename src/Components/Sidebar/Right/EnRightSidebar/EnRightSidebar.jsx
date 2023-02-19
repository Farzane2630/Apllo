import React from 'react'
import './EnRightSidebar.css'

export default function EnRightSidebar() {
  return (
    <div className='left-sidebar en'>
      <div className="left-sidebar-top">
        <div className="left-top-header en mons">
          Challengers
        </div>
        <div className="top-users-container">
          <div className="top-user en">
            <img src="/Icons/crown.png" alt="" className="top-user-crown en" />
            <img src="/avatar/topuser-1.png" alt="" className="top-user-avatar en" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball en' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name en mons"> Marian Brossimova</div>
              <div className="top-user-score-box">
                <div className="score-number">
                  Total: 21080
                </div>
                <div className="score-day">
                  Day: 1250
                </div>
              </div>
            </div>
          </div>
          <div className="top-user-hr" />
          <div className="top-user en">
            <img src="/avatar/topuser-2.png" alt="" className="top-user-avatar en" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball en' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name en mons"> Elina Richarsdon </div>
              <div className="top-user-score-box">
                <div className="score-number">
                  Total:1985
                </div>
                <div className="score-day">
                  Total:1985
                </div>
              </div>
            </div>
          </div>
          <div className="top-user-hr" />
          <div className="top-user en">
            <img src="/avatar/topuser-3.png" alt="" className="top-user-avatar en" />
            <img src="/Icons/green-ball.png" className='top-user-green-ball en' alt="" />
            <div className="top-user-detail">
              <div className="top-user-name en mons">Ramta Mc Birdman</div>
              <div className="top-user-score-box">
                <div className="score-number">
                Total: 1956
                </div>
                <div className="score-day">
                Day: 866
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-seller-challenge">
          <img src="/Icons/cup-icon.png" alt="" className="cup-icon en" />
          <div className="top-seller-details en">
            <span className='mons'>Top Agents</span>
            <div className="more-info">all about challnege ...</div>
          </div>
        </div>
      </div>
      <div className="left-sidebar-bottom">
        <img src="/Images/cover.png" alt="" />
      </div>
    </div>
  )
}
