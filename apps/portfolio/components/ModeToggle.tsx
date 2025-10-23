'use client';

import { Button } from '@repo/ui/components/button';
import { Moon, Sun } from '@repo/ui/icons/icons';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
