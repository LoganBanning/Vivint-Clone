import './SmartDevices.component.css';
import SmartDevicesPicture from '../../Images/smart-devices-picture.webp';
import { BsTelephone } from 'react-icons/bs';

const SmartDevicesComponent = () => {
  return (
    <div className='smart-devices-comp-container'>
      <div className='smart-devices-comp-text'>
        <p className='app-comp-text-1'>Z-WAVE TECHNOLOGY</p>
        <p className='app-comp-text-2'>Integrate other smart home devices</p>
        <p className='app-comp-text-3'>Z-wave technology allows other devices that are not in the Vivint suite of products to communicate with your system.  This means you can integrate all your favorite smart devices, such as voice-activated speakers, thermostats, and smart light bulbs, and control them in the Vivint app.</p>
        <p className='app-comp-text-4 quote-text'>CALL NOW FOR A FREE QUOTE</p>
        <button className='white-button'><BsTelephone className='white-button-icon'/> 801.992.1424</button>
      </div>
      <img src={SmartDevicesPicture} alt='smart home devices' className='smart-home-devices-picture' />
    </div>
  )
}

export default SmartDevicesComponent;