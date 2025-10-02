export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Asurion',
      period: 'Jul 2024 – Dec 2024',
      responsibilities: [
        'Collaborated with the Expert Workspace - Messaging team to integrate a Twilio-based messaging SDK with AI tools, leveraging AWS services to optimize infrastructure and enhance customer-expert pairing, which led to improved engagement rates and sales outcomes.',
        'Reduced queries to Twilio, fixed critical bugs, and implemented a release management system in GitHub Actions to automate deployments.',
        'Contributed to the Digital Enrichments - Device Care team to develop a React-based web app utilizing Contentful CMS, delivering diagnostics, tips, and checkups for extending device lifespan.',
        'Optimized queries by consolidating fetches to a single Contentful space using GraphQL.',
      ],
      technologies: ['React', 'AWS', 'Twilio', 'GraphQL', 'Contentful CMS', 'GitHub Actions'],
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-2xl font-semibold">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-4 dark:border-gray-700">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
            </div>

            <ul className="mt-3 space-y-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1.5 text-gray-400">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span key={tech} className="rounded-full px-3 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
