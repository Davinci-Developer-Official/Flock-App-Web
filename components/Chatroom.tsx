import Image from 'next/image'
import React from 'react'
import b2 from "../public/b1.jpeg"
import ba from "../public/b2.jpeg"
import Chatsbox from '@/components/Chatsbox';
import { FaEllipsisV } from 'react-icons/fa';
import {io} from "socket.io-client"
import Usernav from './Usernav';


interface chatConf{
  userName:string;
  roomId:string | number;
  socket:any;
  setShowList:boolean;
  setShowChat:boolean;
}

function Chatroom(props:any) {
  const {userName,roomId,socket,setShowList,setShowChat}=props
  return (
    
    <div style={{
       // width:"60%",
        height:"600px",
        backgroundColor:"green",
        //position:"absolute",
       // marginLeft:"20%",
        //zIndex:10,
        marginBottom:"10px"
        
      }} >
      {/*navbar*/}
      <div style={{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        height:"70px",
        justifyContent:"space-between",
        backgroundColor:"lightblue"

      }} >
        <span style={{
          borderRadius:20,
          width:"60px",
          height:"60px",
          borderWidth:2,
          marginTop:"5px",
          marginLeft:"10px",
          //borderColor:"black",
          borderStyle:"outset"
        }} >
          <Image src={b2} alt="b2"              
          style={{
            width:"100%",
            height:"100%",
            objectFit:"cover",
            borderRadius:20,
          }}
          />
        </span>
        <span style={{
          width:"70%",
          height:"60px",
          marginTop:"5px",
          //backgroundColor:"white",
          textAlign:"center",
          paddingTop:"15px"
        }} >
        <p className='text-black' >{userName}</p>
        </span>
        <button>
        <FaEllipsisV size={30} style={{
          color:"black"
        }} />
        </button>
        
      </div>


      {/*chatroom*/}
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
          {userName}
          <time className="text-xs opacity-50 text-black "> 12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50 text-black ">
          Seen at 12:46
        </div>
      </div>
    </div>


      {/*chat editor*/}
      <div style={{
        display:"flex",
        flexDirection:"row",
        height:"50px"
      }} >
        <input type='text' placeholder='  enter your text' style={{
            width:"80%",
            height:"100%"
        }} />
        <button style={{
            width:"20%",
            height:"100%",
        }} >
            send
        </button>
      </div>
      </div>
  )
}

export default Chatroom