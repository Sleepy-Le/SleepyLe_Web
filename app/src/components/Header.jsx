export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-text-primary tracking-tight">
          Sleepy Le
        </a>
        <nav>
          <a
            href="/blog"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  )
}
