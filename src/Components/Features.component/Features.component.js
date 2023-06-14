import './Features.component.css';
import PanelPicture from '../../Images/vivint-panel.webp';
import CameraPicture from '../../Images/vivint-cameras.webp';
import AutomationPicture from '../../Images/vivint-automation.webp';
import { AiOutlineArrowRight } from 'react-icons/ai';

const FeaturesComponent = () => {
  return (
    <div className='features-container'>
      <div className='intro-text-container-features'>
        <h3 className='intro-text-features'>Tailer your perfect smart home</h3>
        <p className='intro-text-features-2'>Smart devices like Google Home, Amazon Echo, and Nest thermostats work seamlessly with your</p>
        <p className='intro-text-features-3'>Vivint System</p>
      </div>
      <div className='pictures-features-container'>
        <div className='product-container-features'>
          <img src={PanelPicture} alt='Vivint control panel' className='pictures-features-comp' />
          <p className='features-1'>Convenient Control</p>
          <p className='features-2'>Manage your home from anywhere.</p>
          <ul className='feature-list'>
            <li>Vivint Smart Hub and Keypad</li>
            <li>Vivint Smart Sensors</li>
            <li>Top-rated Vivint App</li>
            <li>24/7 Professional Monitoring</li>
          </ul>
        </div>
        <div className='product-container-features'>
          <img src={CameraPicture} alt="Vivint camera's" className='pictures-features-comp' />
          <p className='features-1'>Exterior Security</p>
          <p className='features-2'>Deter crime before it happens.</p>
          <ul className='feature-list'>
            <li>Doorbell Camera Pro</li>
            <li>Outdoor Camera Pro</li>
            <li>Indoor Camera</li>
            <li>24/7 playback DVR</li>
          </ul>
        </div>
        <div className='product-container-features'>
          <img src={AutomationPicture} alt='Automation equipment' className='pictures-features-comp' />
          <p className='features-1'>Complete Automation</p>
          <p className='features-2'>Set and forget with custom actions.</p>
          <ul className='feature-list'>
            <li>Kwikset Smart Locks</li>
            <li>Smart lights</li>
            <li>Garage door control</li>
            <li>Smart Thermostat</li>
          </ul>
        </div>
      </div>
      <div className='features-button-container'>
        <button className='orange-button'>Start your quote <AiOutlineArrowRight /></button>
        <p className='learn-more-link'>Learn more</p>
      </div>
    </div>
  )
}

export default FeaturesComponent;