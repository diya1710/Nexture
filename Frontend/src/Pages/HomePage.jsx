import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 digital-grid opacity-30"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 animate-pulse"></div>
      
      {/* Floating Career Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 text-6xl opacity-20">💼</div>
        <div className="floating absolute top-40 right-20 text-4xl opacity-20">🎓</div>
        <div className="floating absolute bottom-40 left-20 text-5xl opacity-20">🚀</div>
        <div className="floating absolute top-60 left-1/3 text-3xl opacity-20">💡</div>
        <div className="floating absolute bottom-60 right-1/3 text-4xl opacity-20">📈</div>
        <div className="floating absolute top-1/3 right-10 text-5xl opacity-20">🎯</div>
      </div>
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-white">
            {/* Animated Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-10 drop-shadow-2xl text-glow responsive-text">
              <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>Find Your</span>
              <span className="text-yellow-300 inline-block animate-bounce glow-purple px-4 gradient-text" style={{animationDelay: '0.2s'}}>Dream</span>
              <br />
              <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>Career</span>
              <span className="text-green-300 inline-block animate-bounce glow-blue px-4 gradient-text" style={{animationDelay: '0.6s'}}>Path</span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-2xl md:text-4xl mb-16 opacity-90 drop-shadow-lg max-w-5xl mx-auto leading-relaxed">
              <span className="text-cyan-300">AI-powered</span> career guidance platform to discover your 
              <span className="text-yellow-300"> perfect career</span> and build your professional future.
            </p>
            
            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
              <button className="group px-12 py-6 bg-gradient-to-r from-white to-gray-100 text-green-700 font-bold rounded-full text-2xl hover:scale-110 transition-all duration-300 shadow-2xl glow-purple">
                <span className="flex items-center gap-3">
                  🚀 Start Assessment
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="group px-12 py-6 border-2 border-white text-white font-bold rounded-full text-2xl hover:bg-white hover:text-green-700 transition-all duration-300 shadow-2xl glow-blue">
                <span className="flex items-center gap-3">
                  📚 Explore Careers
                  <span className="group-hover:rotate-12 transition-transform">💡</span>
                </span>
              </button>
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-enhanced rounded-2xl p-8 border border-white/20 card-hover">
                <div className="text-5xl mb-6 floating">🎯</div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Career Assessment</h3>
                <p className="text-base opacity-80 leading-relaxed">Comprehensive personality and skills assessment to match you with ideal careers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-enhanced rounded-2xl p-8 border border-white/20 card-hover">
                <div className="text-5xl mb-6 floating" style={{animationDelay: '1s'}}>💼</div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Job Matching</h3>
                <p className="text-base opacity-80 leading-relaxed">AI-powered job recommendations based on your skills, interests, and goals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-enhanced rounded-2xl p-8 border border-white/20 card-hover">
                <div className="text-5xl mb-6 floating" style={{animationDelay: '2s'}}>📈</div>
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Career Growth</h3>
                <p className="text-base opacity-80 leading-relaxed">Track your professional development and plan your career advancement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default HomePage;
