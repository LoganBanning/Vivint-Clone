import Nav from '../Nav.component/Nav.component';
import SecurityPhoto from '../../Images/Vivint-security-products.jpg';
import './Landingpage.component.css';
import { BsTelephone } from 'react-icons/bs';
import FeaturesComponent from '../Features.component/Features.component';
import AppFeatures from '../App.Features.component/App.Features.component';

const Landingpage = () => {
  return (
    <div className='landing-page-container'>
    <Nav />
    <div className='top-landing-page'>
    </div>
    <img src={SecurityPhoto} alt='Security Equipment' className='equipment-photo' />
    <div className='photo-text'>
      <p className='text-one'>SUPERIOR HOME TECHNOLOGY</p>
      <h1 className='text-two'>A complete smart home<br /> system</h1>
      <p className='text-three'><span className='beginning-text'>Make home control easier while increasing </span>the convenience,<br /> security, and efficiency of your living space.</p>
      <p className='text-four'>CUSTOMIZE WITH A SECURITY EXPERT</p>
      <button className='phone-button-photo'><BsTelephone/> 801.992.1424</button>
    </div> 
      <FeaturesComponent />
      <AppFeatures />
    </div>
  )
}

export default Landingpage;