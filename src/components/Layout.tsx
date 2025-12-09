import React from 'react';
import { Terminal, Shield, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Matrix Rain Effect Placeholder - using CSS grid for now */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Header */}
      <header className="border-b border-hacker-green/20 bg-background/80 backdrop-blur-md z-10 sticky top-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-hacker-green/10 rounded-md group-hover:bg-hacker-green/20 transition-colors">
              <Terminal className="w-6 h-6 text-hacker-green" />
            </div>
            <span className="font-bold text-xl tracking-wider text-hacker-green group-hover:text-white transition-colors">
              IG_LABS<span className="animate-pulse">_</span>
            </span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">OpenSource</span>
            </a>
            <div className="flex items-center gap-2 text-xs px-3 py-1 border border-hacker-green/30 rounded-full bg-hacker-green/5">
              <Shield className="w-3 h-3" />
              <span>STATUS: ONLINE</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-hacker-green/20 py-6 mt-auto bg-black/50 z-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>DESIGNED FOR EDUCATIONAL PURPOSES ONLY. DO NOT USE ON UNAUTHORIZED SYSTEMS.</p>
          <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} INTELLIGENCE GATHERING LABS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
