import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Mission from './components/about/mission';
import Team from './components/about/team';
import Activities from './components/activities/activities';
import Contact from './components/contact/contact';
import Donate from './components/get-involved/donate';
import Volunteer from './components/get-involved/volunteer';
import Home from './components/homepage/Home';
import Modal from 'react-modal';
import MainNavbar from './components/navbar/navbar';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Outlet />}>
          <Route index element={<Mission />} />
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="involve" element={<Outlet />}>
          <Route index element={<Donate />} />
          <Route path="donate" element={<Donate />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
        <Route path="activities" element={<div><Activities /></div>} />
        <Route path="*" element={<h1>Non-existant</h1>} />
      </Routes>

      
      {/* Place footer here */

<footer />

      }


      
    </BrowserRouter>
  );
}

export default App;
