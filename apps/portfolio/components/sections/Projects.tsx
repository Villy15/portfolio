import { Button } from '@repo/ui/components/button';
import Link from 'next/link';

interface ProjectsProps {
  showAll?: boolean;
}

export default function Projects({ showAll = false }: ProjectsProps) {
  const projects = [
    {
      title: 'OrgProfiler',
      year: '2025',
      description: 'Automated organoid analysis platform',
      sourceLink: undefined,
      demoLink: 'https://orgprofiler.com/',
    },
    {
      title: 'Lakbay',
      year: '2024',
      description: 'Tourism cooperative mobile platform',
      sourceLink: 'https://github.com/Villy15/cooptourism',
      demoLink: undefined,
    },
    {
      title: 'Restaurant System',
      year: '2023',
      description: 'Restaurant inventory management system',
      sourceLink: 'https://github.com/Villy15/itisdev-inventory',
      demoLink: undefined,
    },
    {
      title: 'SongTube',
      year: '2023',
      description: 'YouTube music practice app',
      sourceLink: 'https://github.com/Villy15/song-tube',
      demoLink: undefined,
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="mt-12 scroll-mt-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-[1.8rem] font-semibold leading-tight md:text-[2.3rem]">Projects</h2>
          <p className="text-muted-foreground mt-2">Open-source projects I&apos;ve worked on over the years.</p>
        </div>
        {!showAll && (
          <Button variant="link" asChild className="text-foreground hover:text-primary">
            <Link href="/projects">All Projects</Link>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <article
            key={index}
            className="border-border bg-card group flex flex-col rounded-[10px] border p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4">
              <time className="text-muted-foreground text-sm">{project.year}</time>
              <h3 className="mt-2 text-xl font-semibold leading-tight">
                <a
                  href={project.sourceLink || project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  {project.title}
                </a>
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.sourceLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary text-primar dark:text-foreground dark:border-foreground/20"
                >
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </Button>
              )}
              {project.demoLink && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary text-primar dark:text-foreground dark:border-foreground/20"
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
