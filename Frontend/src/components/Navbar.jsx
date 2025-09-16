function Navbar({ onHome, onLogin, onBookSession, onProfile }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 border-b border-white/20"
      style={{ background: 'rgba(34, 197, 94, 0.4)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <h1
            onClick={onHome}
            className="text-3xl font-bold text-white cursor-pointer hover:text-green-300 transition-colors"
          >
            CareerGuide
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-8 md:flex-none">
          <a href="#careers" className="text-white hover:text-green-300 transition-colors duration-200 font-medium text-base">
            Careers
          </a>
          <a href="#assessments" className="text-white hover:text-green-300 transition-colors duration-200 font-medium text-base">
            Assessments
          </a>
          <a href="#resources" className="text-white hover:text-green-300 transition-colors duration-200 font-medium text-base">
            Resources
          </a>
          <a href="#contact" className="text-white hover:text-green-300 transition-colors duration-200 font-medium text-base">
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap justify-end gap-3 md:gap-4 lg:gap-6 ml-auto mr-2 md:mr-4 lg:mr-6 flex-shrink-0">
          <button
            onClick={onLogin}
            className="relative px-4 md:px-5 lg:px-6 py-2 text-white font-semibold text-sm md:text-base border-2 border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Login/Signup
          </button>
          <button
            onClick={onBookSession}
            className="relative px-4 md:px-5 lg:px-6 py-2 bg-gradient-to-r from-white to-emerald-50 text-green-700 font-semibold text-sm md:text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(16,185,129,0.35)] hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Book Session
          </button>
          <button
            onClick={onProfile}
            className="relative px-4 md:px-5 lg:px-6 py-2 text-white font-semibold text-sm md:text-base border-2 border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;