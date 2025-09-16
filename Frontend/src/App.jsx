import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

// Placeholder components for other pages
function ExploreCareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-green-800">Explore Career Page</h1>
    </div>
  );
}

function BookSessionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-800">Book Session Page</h1>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-800">Profile Page</h1>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Conditional rendering for each page
  if (currentPage === 'login') {
    return <LoginPage onHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'explore-career') {
    return (
      <>
        <Navbar
          onHome={() => setCurrentPage('home')}
          onLogin={() => setCurrentPage('login')}
          onBookSession={() => setCurrentPage('book-session')}
          onProfile={() => setCurrentPage('profile')}
        />
        <ExploreCareerPage />
        <Footer />
      </>
    );
  }

  if (currentPage === 'book-session') {
    return (
      <>
        <Navbar
          onHome={() => setCurrentPage('home')}
          onLogin={() => setCurrentPage('login')}
          onBookSession={() => setCurrentPage('book-session')}
          onProfile={() => setCurrentPage('profile')}
        />
        <BookSessionPage />
        <Footer />
      </>
    );
  }

  if (currentPage === 'profile') {
    return (
      <>
        <Navbar
          onHome={() => setCurrentPage('home')}
          onLogin={() => setCurrentPage('login')}
          onBookSession={() => setCurrentPage('book-session')}
          onProfile={() => setCurrentPage('profile')}
        />
        <ProfilePage />
        <Footer />
      </>
    );
  }

  // Default: Home Page
  return (
    <div className="min-h-screen">
      <Navbar
        onHome={() => setCurrentPage('home')}
        onLogin={() => setCurrentPage('login')}
        onBookSession={() => setCurrentPage('book-session')}
        onProfile={() => setCurrentPage('profile')}
      />
      <main className="bg-gradient-to-br from-blue-50 to-blue-100">
        <Hero onExploreCareer={() => setCurrentPage('explore-career')} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
