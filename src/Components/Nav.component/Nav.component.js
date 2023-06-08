import Logo from '../../Logo/Logo';
import './Nav.component.css';
import { IoIosArrowDown } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu';
import { BsTelephone } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className='nav-container'>
      <Logo />
      <div className='nav-links-container'>
        <nav className='nav-links'>
          <h4 className='link'>Home Security <IoIosArrowDown className='down-arrow' /></h4>
          <h4 className='link'>Cameras <IoIosArrowDown className='down-arrow' /></h4>
          <h4 className='link'>Smart Home <IoIosArrowDown className='down-arrow' /></h4>
          <h4 className='link'>Services <IoIosArrowDown className='down-arrow' /></h4>
          <h4 className='link'>How To Buy</h4>
        </nav>
      </div>
      <div className='login-search-container'>
        <h5 className='login'>Login</h5>
        <LuSearch className='search-icon' />
      </div>
      <div className='phone-button-container'>
        <h5 className='peace-of-mind'>GET PEACE OF MIND TODAY</h5>
        <button className='phone-button'><BsTelephone /> 801.992.1424</button>
      </div>
    </div>
  )
}

export default Nav;