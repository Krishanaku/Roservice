import './App.css';
import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
import Element from './Components/Subcomelements/Element';
import Elements2 from './Components/SubcomElement/Elements2';
import Footer from './Components/Subcomfooter/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Element/>
      <Elements2/>
      <Footer/>
   
    </div>
  );
}

export default App;
