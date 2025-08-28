import Nav from '../Nav.component/Nav.component';
import './Landingpage.component.css';
import IntroComponent from '../IntroComponent/IntroComponent';
import FeaturesComponent from '../Features.component/Features.component';
import AppFeatures from '../App.Features.component/App.Features.component';
import SmartDevicesComponent from '../SmartDevices.component/SmartDevices.component';
import QuoteInputComponent from '../QuoteInput.component/QuoteInput.component';
import Footer from '../Footer.component/Footer.component';

const Landingpage = () => {
  return (
    <div className='landing-page-container'>
      <Nav />
      <IntroComponent />
      <FeaturesComponent />
      <AppFeatures />
      <SmartDevicesComponent />
      <QuoteInputComponent />
      <Footer />
    </div>
  )
}

export default Landingpage;