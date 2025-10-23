import { Award, Code2, Layers, Library, Wrench } from 'lucide-react';

export default function Stack() {
  const stackData = {
    languages: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Dart',
      'Java',
      'SQL (MySQL, Postgres)',
      'Bash',
      'HTML',
      'CSS',
    ],
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
    tools: [
      'Git',
      'Docker',
      'AWS (CloudWatch, DynamoDB, SDK)',
      'Cloudflare R2',
      'Contentful CMS',
    ],
    certifications: ['AWS Academy Cloud Foundations'],
  };

  return (
    <section id="stack" className="mt-12 scroll-mt-16">
      <h2 className="mb-2 text-[1.8rem] font-semibold leading-tight md:text-[2.3rem]">Technical Skills</h2>
      <p className="text-muted-foreground mb-8">Technologies and tools I work with.</p>

      <div className="space-y-6">
        {/* Languages */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <Code2 className="h-4 w-4" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {stackData.languages.map(language => (
              <span
                key={language}
                className="border-border bg-background text-foreground rounded border px-3 py-1.5 text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <Layers className="h-4 w-4" />
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {stackData.frameworks.map(framework => (
              <span
                key={framework}
                className="border-border bg-background text-foreground rounded border px-3 py-1.5 text-sm"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Libraries */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <Library className="h-4 w-4" />
            Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {stackData.libraries.map(library => (
              <span
                key={library}
                className="border-border bg-background text-foreground rounded border px-3 py-1.5 text-sm"
              >
                {library}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <Wrench className="h-4 w-4" />
            Developer Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {stackData.tools.map(tool => (
              <span
                key={tool}
                className="border-border bg-background text-foreground rounded border px-3 py-1.5 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-muted-foreground">
            <Award className="h-4 w-4" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {stackData.certifications.map(cert => (
              <span
                key={cert}
                className="border-border bg-background text-foreground rounded border px-3 py-1.5 text-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
