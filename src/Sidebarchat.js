import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebarchat.css';

function Sidebarchat() {
  return (
    <div className='sidebarchat'>
      <Avatar src='https://i.blogs.es/d80b74/luffy-en-one-piece/840_560.jpeg' />
      <div className="sidebarchat_info">
        <h2>Luffy </h2>
        <p>Bro , lets get one piece !!!</p>
      </div>
    </div>
  )
}

export default Sidebarchat
