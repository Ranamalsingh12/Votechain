import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = (props) => {
  // const history = useNavigate();

  // const [inpval, setInpval] = useState({
  //   name: "",
  //   email: "",
  //   date: "",
  //   password: "",
  // });

  // const [data, setData] = useState([]);
  // const getdata = (e) => {
  //   const { value, name } = e.target;

  //   setInpval(() => {
  //     return {
  //       ...inpval,
  //       [name]: value,
  //     };
  //   });
  // };

  // const addData = (e) => {
  //   e.preventDefault();

  //   const { name, email, date, password } = inpval;

  //   if (name === "") {
  //     toast.error(" name field is requred!", {
  //       position: "top-center",
  //     });
  //   } else if (email === "") {
  //     toast.error("email field is required", {
  //       position: "top-center",
  //     });
  //   } else if (!email.includes("@")) {
  //     toast.error("please enter valid email address", {
  //       position: "top-center",
  //     });
  //   } else if (date === "") {
  //     toast.error("date field is required", {
  //       position: "top-center",
  //     });
  //   } else if (date < 18) {
  //     toast.error("You're age must be above 18", {
  //       position: "top-center",
  //     });
  //   } else if (password === "") {
  //     toast.error("password field is required", {
  //       position: "top-center",
  //     });
  //   } else if (password.length < 8) {
  //     toast.error("password length should be greater than eight", {
  //       position: "top-center",
  //     });
  //   } else {
  //     console.log("data added succesfully");
  //     localStorage.setItem("hackathon", JSON.stringify([...data, inpval]));
  //   }
  // };

  return (
    <>
      {/* <div classNameName="container mt-3">
        <section classNameName="border d-flex justify-content-between align-items-center">
          <div
            classNameName="left_data mt-5 ml-
            5 border"
            style={{ width: "100%" }}
          >
            <div classNameName="sign_img mt-5">
              <img
                src="https://www.inventiva.co.in/wp-content/uploads/2020/03/M187_Digital-voting-header-780x470.png"
                style={{ maxWidth: 400 }}
                alt=""
              />
            </div>
          </div>
          <div
            classNameName="d-flex flex-column align-items-center mt-3 p-3"
            style={{ width: "100%" }}
          > */}
      {/* <h3 classNameName="text-center col-lg-6">Sign Up</h3> */}
      {/* <Form > */}
      {/* <Form.Group classNameName="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                          </Form.Group>
                          <Form.Group classNameName="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group classNameName="mb-3 col-lg-6" controlId="formBasicEmail">

                              <Form.Control onChange={getdata} name='date' type="number" placeholder="Enter You're Age" />
                          </Form.Group> */}
      {/* <button classNameName="login-button" onClick = {props.connectWallet}>Login Metamask</button> */}
      {/* </Form> */}

      {/* <Button
              variant="primary"
              classNameName="col-lg-6 btn"
              onClick={props.connectWallet}
              style={{ background: "rgb(67, 185, 127)" }}
              type="submit"
            >
              Login With MetaMask
            </Button>
          </div>
        </section>
        <ToastContainer />
      </div> */}

      <div className="d-flex flex-row align-items-center justify-content-center mt-5">
        <div className=" d-flex flex-row align-items-center justify-content-between border-radius-3 mt-4 p-3" style={{ width: "50rem", background: "white",  borderRadius:"20px" }}>
          <div style={{width:"50%"}}>
            <img
              style={{width: "100%"}}
              className="p-4 border-radius-3"
              src="	https://thumbs.dreamstime.com/b/d-realistic-purple-chain-link-icon-isolated-white-background-two-links-attach-lock-symbol-blockchain-sign-vector-272300908.jpg"
              alt="Card image cap"
            />
          </div>

          <div style={{width:"50%"}} className="">
            <h2>Welcome to VoteChain</h2>
            <p>Blockchain Voting System</p>
            {/* <h5 className="">Login</h5> */}
            <Button
              variant="dark"
              className="col-lg-6 btn mt-4"
              onClick={props.connectWallet}
              style={{
                background: "#212121",
                background:
                  "radial-gradient(circle, rgba(118,100,194,1) 0%, rgba(0,63,138,1)100%)",
              }}
              type="submit"
            >
              Login With MetaMask
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
