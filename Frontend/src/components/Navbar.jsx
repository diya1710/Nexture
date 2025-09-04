function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 border-b border-white/20" style={{background: 'rgba(34, 197, 94, 0.4)', backdropFilter: 'blur(10px)'}}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-3xl font-bold text-white">CareerGuide</h1>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
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

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <button className="px-7 py-2.5 text-white font-semibold text-base border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
            Login
          </button>
          <button className="px-7 py-2.5 bg-white text-green-700 font-semibold text-base rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
