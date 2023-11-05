// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = ({connectWallet}) => {

//     return (
//         <>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Sign Up</h3>
//                         <Form >
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control onChange={getdata} name='date' type="number" placeholder="Enter You're Age" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={connectWallet} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Login With Metamask
//                             </Button>
//                         </Form>
//                     </div>
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     )
// }

// export default Home

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import Logo from '../Images/logo.jpeg';

const Login = ({connectWallet}) => {
  return (
    <div class="loginBox">
      <img
        class="user"
        src="https://i.ibb.co/yVGxFPR/2.png"
        height="100px"
        width="100px"
      />
      <h3>Log In here</h3>
      {/* <form action="/" method="post"> */}
        {/* <div class="inputBox">
          {" "}
          <input
            id="uname"
            type="text"
            name="Username"
            placeholder="Username"
          />
          <input
            id="pass"
            type="password"
            name="Password"
            placeholder="Password"
          />{" "}
        </div>
        <input type="submit" name="" value="Login" /> */}
      {/* </form> */}
        <button className="btn" onClick={connectWallet} type="submit">Login With MetaMask</button>
      {/* <a href="#">
        Forget Password <br />{" "}
      </a> */}
    </div>
  );
};

export default Login;
