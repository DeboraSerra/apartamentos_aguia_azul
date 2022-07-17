import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={ form } onSubmit={ sendEmail }>
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensagem</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default EmailForm;
