import Image from 'next/image'
import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import b2 from "../public/b1.jpeg"

function Usernav() {
  return (
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
        <p className='text-black' >Yes</p>
        </span>
        <button>
        <FaEllipsisV size={30} style={{
          color:"black"
        }} />
        </button>
        
      </div>
  )
}

export default Usernav