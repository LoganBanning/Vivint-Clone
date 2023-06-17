import './App.Features.component.css';
import AppImage from '../../Images/PPCMicrosite-Prod-SplitStory-Desktop-01.png.webp';
import { BsTelephone } from 'react-icons/bs';

const AppFeatures = () => {
  return (
    <div className='app-features-comp-container'>
      <img src={AppImage} alt='Vivint Phone App' className='vivint-phone-app-image' />
      <div className='app-features-text'>
        <p className='app-comp-text-1'>THE VIVINT APP</p>
        <p className='app-comp-text-2'>Your entire home in the<br /> palm of your hand</p>
        <p className='app-comp-text-3'>The top-rated Vivint app gives you total control, on the go.</p>
        <ul className='app-features-list'>
          <li>Check Camera feeds at work</li>
          <li>Lock up from the car</li>
          <li>Open the garage for your package deliveries</li>
          <li>Turn lights on/off </li>
        </ul>
        <p className='app-comp-text-4 quote-text'>CALL NOW FOR FREE QUOTE</p>
        <button className='orange-button app-comp-button'><BsTelephone /> 801.992.1424</button>
      </div>
    </div>
  )
}

export default AppFeatures;