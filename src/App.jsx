import { useState } from 'react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Results from './components/Results/Results';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Hero />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;