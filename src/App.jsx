import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portifolio'>Parallax</section>
      <section>Portifolio1</section>
      <section>Portifolio2</section>
      <section>Portifolio3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
};

export default App;
