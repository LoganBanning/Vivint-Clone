import './QuoteInput.component.css';

const QuoteInputComponent = () => {
  return (
    <div className='quote-input-comp-container'>
      <div className='quote-input-comp-text'>
        <p className='quote-comp-text-1'>Call 801.992.1424<br/> now to get a free<br/> quote</p>
        <p className='quote-comp-text-2'>Ready to turn your home into a smart home?  Call now to get<br /> started or fill out the form.</p>
      </div>
      <div className='quote-input-comp-form-container'>
      <form className='quote-input-comp-form'>
        <input className='quote-input-comp-input' placeholder='First and Last name' ></input>
        <input className='quote-input-comp-input' placeholder='Phone' ></input>
        <input className='quote-input-comp-input' placeholder='Email' ></input>
      </form>
      <p className='quote-input-comp-disclaimer'></p>
      <button className='orange-button'>Start Your Quote</button>
      </div>
    </div>
  )
}

export default QuoteInputComponent;