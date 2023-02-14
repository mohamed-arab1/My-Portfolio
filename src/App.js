import { motion } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Service from './components/Service'
import Milestones from './components/Milestones';
import Blog from './components/Blog';
import Vidoe from './components/Vidoe';
import Testimonial from './components/Testimonial';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <motion.div initial="hidden" animate="show" >
      <ScrollToTop />
      <Home />
      <Service />
      <Portfolio />
      <Milestones />
      <Blog />
      <Vidoe />
      <Testimonial />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
