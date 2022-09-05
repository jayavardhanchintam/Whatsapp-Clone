import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] =useState([]);

  // use effect- when ap loads run this once
  useEffect(()=> {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  },[]);

  


  useEffect(() => {
    const pusher = new Pusher('f48a9f70d15615d48199', {
      cluster: 'ap2',
    });

    var channel = pusher.subscribe('messages');;
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);
  console.log(messages);


  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat messages={messages}  />
      </div>
    </div>
  );
}

export default App;
