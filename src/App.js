import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignIn from './signin'; // Corrected component name
import SignupPage from './SignupPage';


const studentIcon = process.env.PUBLIC_URL + '/student.png'; // Corrected path
const graduationIcon = process.env.PUBLIC_URL + '/graduation.png';

function App() {
  const Students = () => {
    return (
      <div className="students">
        <h3>
          <img src={studentIcon} alt="Students Icon" className="icon" /> {/* Replacing icon with PNG */}
          Students
        </h3>
        <ul>
          <li><a href="#">Reload your Bay Bucks</a></li>
          <li><a href="#">Schedule & Catalog</a></li>
          <li><a href="#">Important Dates</a></li>
          <li><a href="#">Graduation Requirement in Writing Proficiency (UWR)</a></li>
          <li><a href="#">Make a Payment</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">1098-T Form</a></li>
          <li><a href="#">New BaySync Site Coming Soon</a></li>
        </ul>
      </div>
    );
  };
  


  const AcademicAdvising = () => {
    return (
      <div className="academic-advising">
        <h3>
          <img src={graduationIcon} alt="Academic Advising Icon" className="icon" /> {/* Replacing icon with PNG */}
          Academic Advising
        </h3>
        <div className="advising-info">
          <p>
            Students who need help choosing courses should contact their academic advisor.
            If you do not know who your academic advisor is then you can email <a href="mailto:whoismyadvisor@csueastbay.edu">whoismyadvisor@csueastbay.edu</a>.
          </p>
          <p>
            Students can enroll in a maximum of 18 units total (registered plus waitlisted) for Fall/Spring and a maximum of 14 units for Summer.
          </p>
        </div>
      </div>
    );
  };
  


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <SignIn />
              <AcademicAdvising/>
              <Students />
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
