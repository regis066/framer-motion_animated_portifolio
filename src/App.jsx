import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Contact from './components/contacts/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Portifolio from './components/portifolio/Portifolio';
import Services from './components/services/Services';
const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portifolio'>
        <Parallax type="portifolio" />
      </section>
        <Portifolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
