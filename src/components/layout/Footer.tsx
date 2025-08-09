import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-md bg-primary" aria-hidden />
            <span className="font-semibold">Irsa Traders</span>
          </div>
          <p className="text-sm text-muted-foreground">Your one-stop shop for electronics, fashion, and home essentials.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Help</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link to="/help">Support</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Follow</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="Twitter">X</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 border-t text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Irsa Traders</div>
    </footer>
  );
}
