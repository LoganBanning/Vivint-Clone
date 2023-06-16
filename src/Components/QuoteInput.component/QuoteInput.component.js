import './QuoteInput.component.css';
import { useState } from 'react';

const QuoteInputComponent = () => {

  const [ name, setName ] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  console.log(name);
  console.log(phoneNumber);
  console.log(email);

  return (
    <div className='quote-input-comp-container'>
      <div className='quote-input-comp-text'>
        <p className='quote-comp-text-1'>Call <span className='quote-input-comp-phone-text'>801.992.1424</span><br/> now to get a free<br/> quote</p>
        <p className='quote-comp-text-2'>Ready to turn your home into a smart home?  Call now to get<br /> started or fill out the form.</p>
      </div>
      <div className='quote-input-comp-form-container'>
      <form className='quote-input-comp-form'>
        <input 
        className='quote-input-comp-input' 
        placeholder='First and Last name'
        onChange={(e) => setName(e.target.value)} >
        </input>
        <input 
        className='quote-input-comp-input' 
        placeholder='Phone'
        onChange={(e) => setPhoneNumber(e.target.value)} >
        </input>
        <input 
        className='quote-input-comp-input' 
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)} >
        </input>
      </form>
      <p className='quote-input-comp-disclaimer'>Clicking the button below constitutes your electronic signature and consent for Vivint<br /> and its parent company NRG to use automated technology, including calls, texts and<br /> prerecorded messages, to contact you at the number provided about Vivint and NRG<br /> offers. Consent not required to make a purchase. Up to 10msg/month. Reply 'STOP' to <br />opt-out. See Terms of Service and Privacy Policy.</p>
      <button className='orange-button'>Start Your Quote</button>
      </div>
    </div>
  )
}

export default QuoteInputComponent;