import React from 'react'
import EnStatusPieChart from '../../../PieChart/EnStatusPieChart'
import './EnBodyTop.css'

export default function EnBodyTop() {
    return (
        <div className='body-top'>
            <div className="body-top-right en">
                <img src="/Images/en-new-robot.png" alt="" />
                <a href='#'>
                    <button className="activate-btn en ubuntu"> Activate it </button>
                </a>
            </div>
            <div className="body-top-left">
                <ul className='ubuntu'>
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
                    <div className="pie-chart-header en">
                        <span className='mons'>Overview</span>
                        <img src="" alt="" />
                    </div>
                    <div className="pie-chart-body en">
                        <EnStatusPieChart />
                        <div className="statistics">
                            <div className="guide">
                                <div className="pattern green en">
                                    <img src="/Icons/chart-green.png" alt="" />
                                    36021
                                </div>
                                <button className='green-status-btn'> In progress </button>
                            </div>

                            <div className="guide">
                                <div className="pattern blue en">
                                    <img src="/Icons/chart-blue.png" alt="" />
                                    18009
                                </div>
                                <button className='blue-status-btn'> Done </button>

                            </div>
                            <div className="guide">
                                <div className="pattern red en">
                                    <img src="/Icons/chart-red.png" alt="" />
                                    9034
                                </div>
                                <button className='red-status-btn '> Rejected </button>
                            </div>
                            <div className="guide">
                                <div className="pattern orange en">
                                    <img src="/Icons/chart-orange.png" alt="" />
                                    20021
                                </div>
                                <button className='orange-status-btn'>Waiting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
