import Logo from '../../Logo/Logo';
import './Nav.component.css';
import { IoIosArrowDown } from 'react-icons/io'

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
          <h4 className='link'>How To Buy <IoIosArrowDown className='down-arrow' /></h4>
        </nav>
      </div>
    </div>
  )
}

export default Nav;