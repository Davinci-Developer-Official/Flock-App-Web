import Image from 'next/image'
import React, { useState } from 'react'
import ba from "../public/b2.jpeg"
import { FaArrowRight } from 'react-icons/fa'
import Chatroom from './Chatroom'
import Link from 'next/link'



function Chatcard() {
    
  return (

        
        
        <Link href='/chats/chatroom' style={{
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
          <button style={{
              marginRight:"5px"
          }}  >
              <FaArrowRight size={20} style={{
                  color:"black"
              }} />
          </button>
        </Link>
        
 
  )
}

export default Chatcard