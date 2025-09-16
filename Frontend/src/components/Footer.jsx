function Footer() {
  return (
    <footer className="mt-auto relative z-30 py-3 border-t border-white/20" style={{ background: 'rgba(34, 197, 94, 0.4)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-6xl mx-auto px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center text-white/90">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-5 h-5 rounded-sm flex items-center justify-center bg-white/20">
                <span className="text-white text-[9px]">💼</span>
              </div>
              <h3 className="text-[11px] font-semibold text-white">CareerGuide</h3>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-3 text-[11px]">
              <a href="#careers" className="text-white/90 hover:text-white transition-colors">Careers</a>
              <a href="#assessments" className="text-white/90 hover:text-white transition-colors">Assessments</a>
              <a href="#resources" className="text-white/90 hover:text-white transition-colors">Resources</a>
            </div>
          </div>

          <div className="text-center md:text-right text-[11px] text-white/90">
            <div className="flex md:justify-end justify-center gap-3">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
