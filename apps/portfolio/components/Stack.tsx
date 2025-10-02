export default function Stack() {
  const stackData = {
    languages: ['JavaScript', 'TypeScript', 'Dart', 'Python', 'Java', 'SQL'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Nest.js', 'FastAPI', 'Flutter', 'GraphQL'],
    tools: ['Firebase', 'Supabase', 'AWS', 'Docker', 'Git', 'Figma', 'Jest', 'Playwright'],
  };

  return (
    <section id="stack" className="mt-8 scroll-mt-16">
      <h2 className="mb-4 text-2xl font-semibold">Stack</h2>

      <div className="space-y-6">
        {/* Languages */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {stackData.languages.map(language => (
              <span key={language} className="rounded-lg px-4 py-2 text-sm">
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-3">
            {stackData.frameworks.map(framework => (
              <span key={framework} className="rounded-lg px-4 py-2 text-sm">
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="mb-3 text-lg font-medium">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {stackData.tools.map(tool => (
              <span key={tool} className="rounded-lg px-4 py-2 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
