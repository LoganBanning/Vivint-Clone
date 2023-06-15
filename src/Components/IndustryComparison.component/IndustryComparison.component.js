import './IndustryComparison.component.css';
import { BsCheckLg } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import VivintLogoBlack from '../../Images/Vivint_FullLockup_Black.webp';

const IndustryComparison = () => {
  return (
    <div className='industry-comparison-comp-container'>
      <div className='top-text-IC-comp'>
        <h4 className='text-IC-1'>Home automation companies</h4>
        <p className='text-IC-2'>Vivint leads the industry in every single category.</p>
        <p className='text-IC-3'>(last updated April 2023)</p>
      </div>
      <div className='IC-details-container'>
        <div className='IC-details-text'>
          <p className='IC-text'>Locks auto lock when lurker is detected</p>
          <p className='IC-text'>Auto close garage door when leaving (+Car Guard)</p>
          <p className='IC-text'>Thermostat shuts down HVAC system to prevent spread of smoke and flames</p>
          <p className='IC-text'>Cameras use light/sound to deter crime</p>
          <p className='IC-text'>Products designed/developed in-house</p>
          <p className='IC-text'>60 month interest-free financing</p>
        </div>
        <div className='vivint-check-box-container'>
          <img src={VivintLogoBlack} alt='Vivint Logo' className='vivint-logo-IC' />
          <p className='check-boxes'><BsCheckLg /></p>
          <p className='check-boxes'><BsCheckLg /></p>
          <p className='check-boxes'><BsCheckLg /></p>
          <p className='check-boxes'><BsCheckLg /></p>
          <p className='check-boxes'><BsCheckLg /></p>
          <p className='check-boxes'><BsCheckLg /></p>
        </div>
        <div className='adt-check-box-container'>
          <p className='adt-text'>ADT</p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
          <p className='check-boxes-adt'><MdOutlineCancel /></p>
        </div>
      </div>
    </div>
  );
}

export default IndustryComparison;