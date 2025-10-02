import { Button } from '@repo/ui/components/button';
import { Github } from '@repo/ui/icons/icons';

import { ModeToggle } from './ModeToggle';

export default function AppHeader() {
  return (
    <header className="bg-background/80 fixed top-0 z-10 flex h-16 w-full items-center justify-between border-b px-16 backdrop-blur-sm">
      <div>
        <Button variant="link">villy.dev</Button>
      </div>
      <div>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#stack">Stack</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#experience">Experience</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
        </nav>
      </div>
      <div>
        <ModeToggle />
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/Villy15/portfolio" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </Button>
      </div>
    </header>
  );
}
