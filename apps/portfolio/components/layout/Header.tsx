import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@repo/ui/components/button';

export default function Header() {
  return (
    <section className="flex flex-col items-center gap-6 md:flex-row md:items-start">
      <Image
        src="/villy.png"
        alt="Adrian Villanueva"
        className="rounded-full border-4 border-border shadow-lg"
        width={160}
        height={160}
        placeholder="blur"
        blurDataURL="/villy.png"
      />
      <div className="flex h-40 flex-col items-center gap-3 text-center md:h-40 md:items-start md:justify-center md:text-left">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">Adrian Villanueva</h1>
          <p className="text-primary mt-2 text-xl font-medium">Software Engineer</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/adrian-john-villanueva" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/Villy15" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
