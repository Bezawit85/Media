import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
import Sky from "../assets/sky.jpg";

function Sidebar() {
    const recentItem = (topic) => {
        return(
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
        </div>
        )
    }
  return (
    <div className='sidebar'>
    <div className='sidebar_top'>
        <img src={Sky} alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Bezawit Eshetu</h2>
        <h4>bezaeshetu46@gmail.com</h4>
    </div>
    <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'> 2,4 </p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'> 2,2 </p>
        </div>
    </div>
    <div className='sidebar_bottom'>
   <p>Recent</p>
   {recentItem('JavaScript')}
   {recentItem('Reactjs')}
    </div>
    </div>
  )
}

export default Sidebar