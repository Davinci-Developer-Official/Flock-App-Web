import React from 'react'
import ba from "../public/b2.jpeg"
import Image from 'next/image'
import b2 from "../public/b1.jpeg"

function Chatsbox() {
  return (
    <div style={{
        height:"480px",
        width:"100%",
        overflowY:"scroll",
        backgroundColor:"white",
        overflow:"hidden"
    }} >
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image src={ba} alt="User Avatar" />
          </div>
        </div>
        <div className="chat-header text-black ">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 text-black "> 12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50 text-black ">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image src={b2} alt="User Avatar" />
          </div>
        </div>
        <div className="chat-header text-black ">
          Anakin
          <time className="text-xs opacity-50 text-black ">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50 text-black ">
          Seen at 12:46
        </div>
      </div>
    </div>
  )
}

export default Chatsbox