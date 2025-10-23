'use client';

import { Button } from '@repo/ui/components/button';
import { Sheet, SheetContent, SheetTrigger } from '@repo/ui/components/sheet';
import { Github } from '@repo/ui/icons/icons';
import { Briefcase, Code2, FolderKanban, Menu, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ModeToggle } from '../ModeToggle';

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/#about', icon: User, label: 'About' },
    { href: '/#stack', icon: Code2, label: 'Stack' },
    { href: '/#experience', icon: Briefcase, label: 'Experience' },
    { href: '/#projects', icon: FolderKanban, label: 'Projects' },
  ];

  return (
    <header className="bg-background/80 fixed top-0 z-10 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-sm md:px-16">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/villy.png"
          alt="Adrian Villanueva"
          className="border-border rounded-full border-2 shadow-md"
          width={40}
          height={40}
        />
        <Button variant="link" asChild className="text-foreground p-0 font-bold">
          <Link href="/">villy.dev</Link>
        </Button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden gap-4 md:flex">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" asChild>
            <Link href={item.href} className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-2 md:flex">
        <ModeToggle />
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/Villy15/portfolio" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  className="justify-start"
                  onClick={() => setOpen(false)}
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
              <div className="border-border my-4 border-t" />
              <Button variant="ghost" asChild className="justify-start">
                <a
                  href="https://github.com/Villy15/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
