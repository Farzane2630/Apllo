import React from 'react'

export default function EnFooter() {
  return (
    <div className='footer'>
      <div className="footer-right">
        Made with <span>
          <img src="/Icons/heart.png" alt="" /></span> in Unique Design team by Bardia. All rights reserved for Apollo OU.
      </div>
      <div className="footer-left">
        <div className="footer-actions">
          <img src="/Icons/arrow-turn.png" alt="" />
          chek for update
        </div>
        <div className="footer-actions">
          <img src="/Icons/Show.png" alt="" />
          Privacy Policy
        </div>
        <div className="footer-actions">
          <img src="/Icons/Bookmark.png" alt="" />
          Tutorial
        </div>
        <div className="footer-actions safe-contact">
          <img src="/Icons/Shield-Done.png" alt="" />
          Secure connection
        </div>
      </div>
    </div>
  )
}
