import React from 'react'

interface LoginStudentProps {
    setlogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

function LoginAccount(props: LoginStudentProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-yellow-500 ">  Login now </h1>
        <p className="py-6"> Access Flock App account using your credentials </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-yellow-500 text-black hover:bg-white  ">Login</button>
          </div>
        </div>
        <p style={{
            marginLeft:"5%"
        }} >You dont have an account ? sign up <button style={{
            color:"yellow"
        }} onClick={()=>{
            props.setlogin(false)
        }} >now</button> </p>
      </div>
    </div>
  </div>
  )
}

export default LoginAccount