import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SignUpBox() {
  const secretKey = <Form.Group controlId="secretKey">
    <Form.Label>Secret key</Form.Label>
    <Form.Control type="password" placeholder="Secret key" />
  </Form.Group>
  const [select, setSelect] = useState(false)
  const viewSecretKey = (e) => {
    if(e.target.value == 'Admin' || e.target.value == 'Curator'){
        setSelect(true)
    } else {
      setSelect(false)

    }
  }

  return (
    <>
      <Container>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name={'name'} type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name={'email'} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control name={'phone'} type="phone" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control name={'company'} type="text" placeholder="Enter your company" />
        </Form.Group>
        <Form.Group controlId="Form.ControlSelect1">
          <Form.Label>Role select</Form.Label>
          <Form.Control onChange={viewSecretKey} name={'role'} as="select">
            <option>Stakeholder</option>
            <option>User</option>
            <option>Support</option>
            <option>Curator</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>
        {select ? secretKey : null}
        <Button name={'signUpBtn'} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      </Container>
    </>
  );
}

export default SignUpBox;