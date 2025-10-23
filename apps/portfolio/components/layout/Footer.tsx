import { Button } from '@repo/ui/components/button';
import { Github } from '@repo/ui/icons/icons';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#stack', label: 'Stack' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#projects', label: 'Projects' },
  ];

  return (
    <footer className="border-border mt-8 border-t py-4">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          {/* Left: Copyright and Made with */}
          <div className="text-muted-foreground flex flex-col items-center gap-1 text-xs md:items-start">
            <p>© {currentYear} Adrian Villanueva. All rights reserved.</p>
            <p className="text-muted-foreground/70">Made with ❤️ by Adrian Villanueva</p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Connect */}
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild className="h-7 w-7">
              <a
                href="https://github.com/Villy15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7">
              <a
                href="https://linkedin.com/in/adrian-john-villanueva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7">
              <a href="mailto:adrianvill07@gmail.com" aria-label="Email">
                <Mail className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
