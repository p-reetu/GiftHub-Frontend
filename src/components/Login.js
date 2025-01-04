import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import LoginPageImage from '../assets/login-page-image.png';
import './Login.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [unauth,setUnauth] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  function loginHandler(e){
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL+'/login/',{
      "username":e.target[0].value,
      "password":e.target[1].value
    }).then((res)=>{
      if (res.status == 200){
        navigate('/');
      }
    }).catch((err)=>{
      if(err.response && err.response.status === 401){
        setUnauth(true);
      }
      else{
        setErrorMessage('An error occurred. Please try again later.');
      }
    })
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
      
        <Col lg={6} className='p-0'>
        <div className='login-form'>
          <h2>Sign In</h2>
          <br/>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        {unauth && <p>Invalid username or password!</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Button variant="primary" type="submit" id="sign-in-btn" >
          Sign In
        </Button>
        <p className='mt-2'>Don't have account? <a href='/register' className='text-muted'>Create one.</a></p>
      </Form>
    </div>
        </Col>
        <Col lg={6} className='p-0'>
        <img id="login-page-image" className='float-right' src={LoginPageImage} alt="login page image"/>
        </Col>
      </Row>
    </Container>
    
  );
}
