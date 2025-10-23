'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui/components/tooltip';
import { Award, Code2, Info, Layers, Library, Wrench } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import { getDeviconUrl } from '@/lib/devicon';

type StackCategory = {
  label: string;
  icon: React.ElementType;
  items: readonly string[];
};

const stackData = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'Java', 'MySQL', 'PostgreSQL', 'Bash', 'HTML', 'CSS'],
  frameworks: [
    'React',
    'Next.js',
    'Nest.js',
    'Express',
    'FastAPI',
    'Flutter',
    'NX Monorepo',
    'Turborepo',
    'Firebase',
    'Supabase',
  ],
  libraries: ['Node.js', 'Zustand', 'React Query', 'Tailwind CSS', 'Jest', 'Playwright', 'GraphQL'],
  tools: ['Git', 'Docker', 'AWS (CloudWatch, DynamoDB, SDK)', 'Cloudflare R2', 'Contentful CMS'],
  certifications: ['AWS Academy Cloud Foundations'],
} as const;

function DevIcon({ url, alt }: { url: string | null; alt: string }) {
  const [failed, setFailed] = React.useState(false);
  if (!url || failed) return <Code2 className="h-4 w-4" />;
  return (
    <Image src={url} alt={alt} width={16} height={16} className="object-contain" onError={() => setFailed(true)} />
  );
}

function TechCategory({ label, icon: Icon, items }: StackCategory) {
  return (
    <div>
      <h3 className="text-muted-foreground mb-3 flex items-center gap-2 text-base font-semibold">
        <Icon className="h-4 w-4" />
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => {
          const url = getDeviconUrl(item);
          return (
            <span
              key={item}
              className="border-border bg-background text-foreground flex items-center gap-2 rounded border px-3 py-1.5 text-sm"
            >
              <DevIcon url={url} alt={item} />
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Stack() {
  const categories: StackCategory[] = [
    { label: 'Languages', icon: Code2, items: stackData.languages },
    { label: 'Frameworks', icon: Layers, items: stackData.frameworks },
    { label: 'Libraries', icon: Library, items: stackData.libraries },
    { label: 'Developer Tools', icon: Wrench, items: stackData.tools },
    { label: 'Certifications', icon: Award, items: stackData.certifications },
  ];

  return (
    <section id="stack" className="mt-12 scroll-mt-16">
      <div className="flex flex-row gap-2">
        <h2 className="mb-2 text-[1.8rem] font-semibold leading-tight md:text-[2.3rem]">Technical Skills</h2>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Info className="text-muted-foreground mb-4 inline-block h-4 w-4 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Icons from https://devicon.dev</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-muted-foreground mb-8">Technologies and tools I work with.</p>

      <div className="space-y-6">
        {categories.map(category => (
          <TechCategory key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
}
