
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Sun className="h-8 w-8 text-[#D4AF37]" />
            <span className="text-2xl font-serif font-semibold">Farewell<span className="text-[#D4AF37]">25</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
            <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold">
              Share Memory
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass-dark mt-3 py-4">
          <div className="container flex flex-col gap-4 items-center">
            <Link to="https://drive.google.com/drive/folders/1aToVz9EYmQX44L0gXSz3l7WfnEQAdz0z" className="font-medium text-foreground/80 py-2">Home</Link>
            <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold w-full mt-2">
              Share Memory
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
