import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({connectWallet}) => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })



    const [data, setData] = useState([]);
    const getdata = (e) => {


        const { value, name } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('please enter valid email address', {
                position: "top-center",
            });
        } else if (date === "") {
            toast.error('date field is required', {
                position: "top-center",
            });

        } else if (date < 18) {
            toast.error("You're age must be above 18", {
                position: "top-center",
            });
        }

        else if (password === "") {
            toast.error('password field is required', {
                position: "top-center",
            });
        } else if (password.length < 8) {
            toast.error('password length should be greater than eight', {
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("hackathon", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='date' type="number" placeholder="Enter You're Age" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={connectWallet} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Login With Metamask
                            </Button>
                        </Form>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home