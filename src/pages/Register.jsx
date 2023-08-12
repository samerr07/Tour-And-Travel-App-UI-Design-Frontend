import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined,
})
const handleChange = (e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const handleSubmit = (e)=>{
  e.preventDefault();
  toast.success("User Created Successfully !!",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })
}
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="loginContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={registerImg} alt="" />
              </div>
              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>

                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <input type="text"  id="username" placeholder='Username' required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email"  id="email" placeholder='Email' required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password"  id="password" placeholder='Password' required onChange={handleChange}/>
                  </FormGroup>

                  <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;
