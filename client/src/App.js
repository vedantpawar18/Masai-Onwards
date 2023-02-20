
import './App.css';
import Model2 from './components/Model2';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import LandingSignUp from './components/LandingSignUp';
import FailAlertBar from './components/FailAlertBar';
import PassAlertBar from './components/PassAlertBar';
import Cards from './components/Cards';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className="App">
    {/* <Navbar/>
      <LandingPage/> */}
      {/* <SignUp/>
      <LandingSignUp/> */}
      {/* <Model2/> */}
      <SideBar/>
    <Cards/>
      < FailAlertBar/>
      <PassAlertBar/>
      {/* <SignIn/>
      <LandingPage/> */}
    </div>
  );
}

export default App;
