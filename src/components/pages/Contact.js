import React, { useState, useRef } from 'react';
import validator from 'validator';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_dset5tn";
const TEMPLATE_ID = "template_8timkug";
const USER_ID = "NnZz8Dzly6IVePi4S";

export default function Contact(props) {

  // class Mouse extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleMouseMove = this.handleMouseMove.bind(this);
  //     this.state = { x: 0, y: 0 };
  //   }

  //   handleMouseMove(e) {
  //     this.setState({
  //       x: e.clientX,
  //       y: e.clientY
  //     });
  //   }
  // }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    // setName('');
    // setEmail('');
    // setMessage('');

    // console.log('Form submitted!');
    // alert('Form submitted!');
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'user_name':
        return setName(value);
      case 'user_email':
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
      <form ref={form}>
        <label className='contact-form'>
          Name:
          <br/>
          <input 
            type='text' 
            className='contact-form' 
            name='user_name' 
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
            id="user_email" 
            onChange={bothFncts}
            name='user_email'
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
        value='Send'
        onClick={handleSubmit}>Submit
        </button>
      </form>
    </section>

  );
}
