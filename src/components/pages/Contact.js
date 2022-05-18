import React, { useState } from 'react';
import validator from 'validator';

export default function Contact(props) {

  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }

    handleMouseMove(e) {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    }
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

    console.log('Form submitted!');
    alert('Form submitted!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'message':
        return setMessage(value);
      default:
        return;
    }
  }



  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Please enter a valid email address.')
    }
  }

  const bothFncts = (e) => {
    validateEmail(e);
    handleInputChange(e);
  }

  return (
    <section class='container'>
      <h1 className='all-header' id='contact-header'>Contact</h1>
      <form>
        <label className='contact-form'>
          Name:
          <br/>
          <input 
            type='text' 
            className='contact-form' 
            name='name' 
            value={name}
            onChange={handleInputChange}
            />
        </label>
        <br/>
        <label className='contact-form'>
          Email:
          <br/>
          <input 
            type="text" 
            className='contact-form' 
            id="userEmail" 
            onChange={bothFncts}
            name='email'
            value={email}
            />
        </label>
        <br/>
        <label className='valid-email' style={{
          fontWeight: 'bold',
          color: 'red',
        }}>
          {emailError}
        </label>
        <br/>
        <label className='contact-form'>
          Message:
          <br/>
          <input 
            type='text' 
            className='contact-form'
            name='message'
            onChange={handleInputChange}
            value={message}
            />
        </label>
        <br/>
        <br/>
        <button 
        type='submit'
        className='btn btn-info'
        value='Submit'
        onClick={handleSubmit}>Submit
        </button>
      </form>
    </section>

  );
}
