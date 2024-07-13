import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from './My_components/MyNavbar';
import SignUp from './My_components/Navbar_components/SignUp';
import LogIn from './My_components/Navbar_components/LogIn';
// import DarkBtn from './My_experiments/DarkUI';
// import MyFooter from './My_components/MyFooter';

import { Home } from './Home';
import AboutUs from './My_components/Navbar_components/AboutUs';
import ContactUs from './My_components/Navbar_components/ContactUs';
import PrivacyPolicy from './My_components/Navbar_components/Privacy_Policy';
function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='privacy-policy' element={<PrivacyPolicy/>} />
      </Routes>

    </Router>
  );
}

export default App;
