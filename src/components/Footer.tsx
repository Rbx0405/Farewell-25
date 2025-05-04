
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground/5 mt-auto">
      <div className="container max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-serif font-semibold">Farewell<span className="text-amber-500">25</span></span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Capturing the golden moments of 2025 before we say goodbye.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/memories" className="text-muted-foreground hover:text-foreground transition-colors">Memories</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">Join our newsletter for more nostalgic content.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-background border rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-amber-500" />
              <button type="submit" className="bg-golden-orange text-white px-4 py-2 rounded-r-md hover:bg-amber-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Farewell25. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
