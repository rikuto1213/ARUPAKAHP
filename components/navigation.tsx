export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              🦙
            </div>
            <div className="text-sm font-bold text-slate-900">
              <div>はしるアルパカ</div>
              <div className="text-xs text-slate-600 font-normal">App Dev Circle</div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              ホーム
            </a>
            <a href="#about" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              About us
            </a>
            <a href="/achievements" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              実績
            </a>
            <a href="#members" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              メンバー紹介
            </a>
            <a href="#join" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              入部希望者向け
            </a>
             <a href="#corporate" className="text-sm font-medium text-slate-900 hover:text-pink-600">
              企業向け
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold hover:shadow-lg transition-all">
              CONTACT
            </button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2">
              JOIN US <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
