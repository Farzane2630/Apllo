import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-right">
         طراحی شده با <span>
            <img src="/Icons/heart.png" alt="" /></span>  در استودیوی طراحی یونیک دیزان توسط بردیا - تمامی حقوق برای آپولو محفوظ است.
        </div>
            <div className="footer-left">
                <div className="footer-actions">
                    <img src="/Icons/arrow-turn.png" alt="" />
                    بروزرسانی
                    </div>
                <div className="footer-actions">
                    <img src="/Icons/Show.png" alt="" />
                    حریم خصوصی
                    </div>
                <div className="footer-actions">
                    <img src="/Icons/Bookmark.png" alt="" />
                    آموزش کار با سامانه
                    </div>
                <div className="footer-actions safe-contact">
                    <img src="/Icons/Shield-Done.png" alt="" />
                    ارتباط امن
                    </div>
        </div>
    </div>
  )
}
