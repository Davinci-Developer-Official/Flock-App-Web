"use client"
import React, { useState } from 'react'
import ba from "../public/b2.jpeg"
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Chatroom from './Chatroom'
//import Chatcard from './Chatcard';
import { io } from 'socket.io-client'
import Link from 'next/link'



function Chatlist() {
  const [showChat, setShowChat] = useState(false);
  const[showList,setShowList]=useState(true)
  const [userName, setUserName] = useState("Greg");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  var socket: any;
  socket = io("http://localhost:3001");

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
// You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };
  return (
    <div style={{
        width:"100%",
        height:"600px",
        marginBottom:"5px"
        
        //marginLeft:"5%"
      }} >
        {/*chatlist && chatroom */}
        <div style={{
        width:"60%",
        backgroundColor:"red",
        height:"100%",
        marginLeft:"20%",
        display:"flex",
        flexDirection:"column",
      }} >
        {/*chatlist*/}
{showList&&(<button onClick={()=>{
  setShowChat(true)
  setShowList(false)
}} style={{
  display:"flex",
  flexDirection:"row",
  marginTop:"5%",
  width:"90%",
  marginLeft:"5%",
  backgroundColor:"white",
  justifyContent:"space-between",
  borderColor:"black",
  borderWidth:1.5
}}>
 <span style={{
     height:"50px",
     width:"50px",
     borderRadius:20,
     marginLeft:"5px"
 }} ><Image src={ba} alt="img" style={{
     width:"100%",
     height:"100%",
     objectFit:"cover",
     borderRadius:20,
     
 }}  /></span>
 <span><p style={{
     color:"black",
 }} >placeholder</p></span>
 <span style={{
     marginRight:"5px"
 }}  >
     <FaArrowRight size={20} style={{
         color:"black"
     }} />
 </span>
</button>)}
        {/*chatroom*/}
      {showChat&&(<Chatroom userName={userName} roomId={roomId} socket={socket} setShowList={setShowList} setShowChat={setShowChat}   />)}
        </div>

       
        
      </div>
  )
}

export default Chatlist