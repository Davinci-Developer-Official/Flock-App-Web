"use client"
import LoginAccount from '@/components/LoginAccount';
//import Navbar from '@/components/Navbar'
import RegisterAccount from '@/components/RegisterAccount';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
    
      {login ? <LoginAccount setlogin={setLogin} /> : <RegisterAccount setlogin={setLogin} />}
    </>
  )
}
