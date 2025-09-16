import { BsTelephone } from 'react-icons/bs';
import SecurityPhoto from '../../Images/Vivint-security-products.jpg';
import './IntroComponent.css';


const IntroComponent = () => {
    return (
        <div className='top-landing-page'>
            <div className='photo-text'>
                <p className='text-one'>SUPERIOR HOME TECHNOLOGY</p>
                <h1 className='text-two'>A complete smart home<br /> system</h1>
                <img src={SecurityPhoto} alt='Security Equipment' className='equipment-photo' />
                <p className='text-three'><span className='beginning-text'>Make home control easier while increasing </span>the convenience,<br /> security, and efficiency of your living space.</p>
                <p className='text-four'>CUSTOMIZE WITH A SECURITY EXPERT</p>
                <button className='phone-button-photo'><BsTelephone/> 801.992.1424</button>
            </div> 
        </div>
    )
}

export default IntroComponent;