"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import Chatlist from '../../components/Chatlist';

function page() {
     // Initialize userExists as false
  const [userExists, setUserExists] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user exists in local storage
    const userInLocalStorage = localStorage.getItem('user');

    // Check if userInLocalStorage is not null or undefined
    if (userInLocalStorage !== null && userInLocalStorage !== undefined) {
      // User exists in local storage
      setUserExists(true);
    }
  }, [userExists]); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
        <Navbar/>
      
      {userExists ? (
        <p>User exists in local storage</p>
      ) : (
        <Chatlist/>
      )}
    </div>
  );
}

export default page