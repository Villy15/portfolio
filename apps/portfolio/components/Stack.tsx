export default function Stack() {
  const stackData = {
    languages: ["JavaScript", "TypeScript", "Dart", "Python", "Java", "SQL"],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Nest.js",
      "FastAPI",
      "Flutter",
      "GraphQL",
    ],
    tools: [
      "Firebase",
      "Supabase",
      "AWS",
      "Docker",
      "Git",
      "Figma",
      "Jest",
      "Playwright",
    ],
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Stack</h2>

      <div className="space-y-6">
        {/* Languages */}
        <div>
          <h3 className="text-lg font-medium mb-3">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {stackData.languages.map((language) => (
              <span key={language} className="px-4 py-2 rounded-lg text-sm">
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-3">
            {stackData.frameworks.map((framework) => (
              <span key={framework} className="px-4 py-2 rounded-lg text-sm">
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-lg font-medium mb-3">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {stackData.tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-lg text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
