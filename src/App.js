

import './App.css';
import Background from './BackgroundImage/Background';
import Navbar from "../src/Navbar/Navbar";
import Details from './CompanyDetailsPages/Details';
import OurService from './OurService/OurService';
import UpComing from './UpComingEvent/UpComing';
import Sinup from './SinupNow/Sinup';
import News from './News/News';
import Footer from './Footer/Footer';
import FooterDetails from './FooterDetails/FooterDetails';


function App() {
  return (
    <div >
     <Background></Background>
     <Details></Details>
    <Navbar></Navbar>
    <OurService></OurService>
    <div className="row">
      <div className="col-md-4">
        <UpComing></UpComing>
      </div>
      <div className="col-md-4">
        <UpComing></UpComing>
      </div>
      <div className="col-md-4">
        <UpComing></UpComing>
      </div>
    </div>
    <Sinup></Sinup>
     <News></News>
    
     <Footer></Footer>
     <FooterDetails></FooterDetails>
 
    </div>
  );
}

export default App;
