function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 text-gray-700 py-4 border-t-2" style={{background: 'linear-gradient(135deg, #f0fdf4, #dcfce7, #bbf7d0)', borderTopColor: '#86efac'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>
                <span className="text-white text-xs">💼</span>
              </div>
              <h3 className="text-lg font-bold" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>CareerGuide</h3>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Empowering your career journey with AI-powered guidance and personalized recommendations.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-gray-700 font-semibold mb-3 text-sm">🔗 Quick Links</h4>
            <div className="space-y-1">
              <a href="#careers" className="block text-gray-600 hover:text-green-700 transition-colors duration-200 text-xs">
                Career Paths
              </a>
              <a href="#assessments" className="block text-gray-600 hover:text-green-700 transition-colors duration-200 text-xs">
                Assessments
              </a>
              <a href="#resources" className="block text-gray-600 hover:text-green-700 transition-colors duration-200 text-xs">
                Resources
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-400 pt-3 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} CareerGuide. Made with ❤️ for your career success. All rights reserved.
          </p>
          <div className="mt-2 space-x-4 text-xs">
            <a href="#privacy" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
              🔒 Privacy Policy
            </a>
            <a href="#terms" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
              📜 Terms of Service
            </a>
            <a href="#cookies" className="text-gray-600 hover:text-green-700 transition-colors duration-200">
              🍪 Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
