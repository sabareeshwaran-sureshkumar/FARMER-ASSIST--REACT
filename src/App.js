import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import About from './Components/About/About'
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer'
import Features from './Components/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='About' title='What We Do'/>
        <Features/>
        <Title subTitle='Our Services' title='Features We Provide'/>
        <About/>
        <Download/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
