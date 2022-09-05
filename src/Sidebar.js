import React from 'react';
import "./Sidebar.css";
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './Sidebarchat';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar  src='data:image/jpeg;base64,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'/>
            <div className="sidebar_headerRight">
                <IconButton>
                 <DonutLargeIcon />
                </IconButton>
                <IconButton>
                 <ChatIcon />
                </IconButton> 
                <IconButton>
                 <MoreVertIcon/>
                </IconButton>    
            </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
              <SearchIcon />
              <input placeholder='search or start a new chat' type='text' /> 
          </div>
        </div>

        <div className="sidebar_chats">
          <Sidebarchat />
          <Sidebarchat/>
          <Sidebarchat/>
        </div>
      
    </div>
  )
}

export default Sidebar
