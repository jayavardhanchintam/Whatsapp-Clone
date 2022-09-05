import { Avatar,IconButton } from '@mui/material';
import React, { useState } from 'react';
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import axios from './axios';

function Chat( {messages} ) {
  const [input, setInput] = useState("");

  const sendMessage = async (e)=> {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "ZENNY ",
      timestamp: "Just now !!!",
      received: false,
    });

    setInput("");
  };
  return (
    <div className='chat'>
        <div className="chat_header">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw3DvmvPLy1aayDbTfXfq9bj1SD22dPgdlg&usqp=CAU' />
          <div className="chat_headerInfo">
            <h3>One Piece !!</h3>
            <p>Last seen at...</p>
          </div>
          <div className="chat_headerRight">
              <IconButton>
                 <SearchIcon/>
              </IconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
        </div>
        </div>

        <div className="chat_body">
          {messages.map((message) => (  // forEach cant return while map function can return 
              <p className={`chat_message ${message.received && "chat_reciever"}`} >
              <span className='chat_name'> {message.name} </span>
              {message.message}
              <span className='chat_timestamp'> {message.timesamp} </span>         
          </p>

          ))}
        </div>


        <div className="chat_footer">
          <InsertEmoticonIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)}   placeholder='type a message ' type='text'/>
            <button onClick={sendMessage} type='submit'>Send a messge</button>
          </form>
          <MicIcon />
        </div>
    </div>
  )
}

export default Chat
