"use client"
import Image from 'next/image'
import React from 'react'

import Chatsbox from '@/components/Chatsbox';
import { FaEllipsisV } from 'react-icons/fa';
import {io} from "socket.io-client"
import Usernav from '@/components/Usernav';





function page() {
  return (
    
    <div style={{
        width:"60%",
        height:"600px",
        backgroundColor:"green",
        //position:"absolute",
        marginLeft:"20%",
        //zIndex:10,
        marginBottom:"10px"
        
      }} >
      {/*navbar*/}
        <Usernav/>
      {/*chatroom*/}
        <Chatsbox/>
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

export default page