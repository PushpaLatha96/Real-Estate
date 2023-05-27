import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import  "./App.css"
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/Values/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>
       <Header/>
       <Hero/>
  
    </div>
     <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <Getstarted/>
    <Footer/> 
   </div>
   )
}

export default App;
