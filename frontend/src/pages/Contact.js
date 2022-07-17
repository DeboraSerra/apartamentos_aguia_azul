import React from 'react';
import EmailForm from '../components/EmailForm';

const Contact = () => {
  return (
    <main>
      <h2>Fale conosco!</h2>
      <section>
        <p>Telefones</p>
        <p>(13) 9 8203 0438</p>
        <p>(13) 9 9669 7525</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </section>
      <h3>Ou mande um email!</h3>
      <EmailForm />
    </main>
  )
}

export default Contact;
