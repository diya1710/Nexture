import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="bg-gradient-to-br from-blue-50 to-blue-100">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
