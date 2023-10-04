import Link from 'next/link';
import React from 'react'

interface RegisterStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function RegisterAccount(props: RegisterStudentProps ) {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-yellow-500 ">Register now </h1>
      <p className="py-6  ">
      Create a Flock App account please provide your information
      </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Your username" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phonenumber(optional)</span>
          </label>
          <input type="tel"  placeholder=" +1(555) 555-1234 " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Create Password</span>
          </label>
          <input type="text" placeholder="Create Password" className="input input-bordered" />        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="repeat password" className="input input-bordered" />        
        </div>
        <div className="form-control mt-6">
          <Link href="/chats" className="btn  bg-yellow-500 text-black hover:bg-white ">Register</Link>
        </div>
      </div>
      <p style={{
            marginLeft:"5%"
        }} >Already have an account ? sign in <button style={{
            color:"yellow"
        }} onClick={()=>{
            props.setlogin(true)
        }} >now</button> </p>
    </div>
  </div>
</div>
  )
}

export default RegisterAccount