// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ContactUs() {
//   return (
//     <Container>
//       <h2>Contact Us</h2>
//       <Row>
//         <Col md={6}>
//           <Form>
//             <Form.Group controlId="formName">
//               <Form.Label>Your Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your name" />
//             </Form.Group>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" />
//             </Form.Group>
//             <Form.Group controlId="formMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Col>
//         <Col md={6}>
//           <h3>Contact Information</h3>
//           <p>
//             Address: 123 Main Street<br />
//             City: Your City<br />
//             Phone: (123) 456-7890<br />
//             Email: contact@example.com
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ContactUs;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import NavBar from "../components/NavBar";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
  };

  render() {
    return (
      <>
        <NavBar setIsConnected={this.props.setIsConnected} />
        <div
          style={{ marginLeft: "18em", marginRight: "18em", borderRadius:"30px"}}
          className=" bg-white mt-4 p-4"
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={this.state.message}
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn mt-3 btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
