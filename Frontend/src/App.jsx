import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar onHome={() => setCurrentPage('home')} onLogin={() => setCurrentPage('login')} />
        <div className="flex items-center justify-center min-h-screen py-12">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">Don't have an account? 
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onHome={() => setCurrentPage('home')} onLogin={() => setCurrentPage('login')} />
      <main className="bg-gradient-to-br from-blue-50 to-blue-100">
        <Hero onExploreCareer={() => setCurrentPage('explore-career')} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
