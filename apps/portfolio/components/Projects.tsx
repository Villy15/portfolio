export default function Projects() {
  const projects = [
    {
      title: 'LAKBAY COOP',
      period: 'Sep 2023 – Jul 2024',
      description:
        'Designed and developed a multi-tenant mobile application serving as a cooperative platform for tourism cooperatives, enabling members to contribute services such as accommodations, transport, and tours while earning points for each contribution.',
      technologies: ['Flutter', 'Firebase', 'Riverpod', 'Google Maps API'],
    },
    {
      title: 'Inventory Management System',
      period: 'May 2023 – Aug 2023',
      description:
        'Designed and implemented a restaurant inventory management system with an interactive dashboard and POS integration to address low-inventory challenges. Utilized data analysis to provide actionable insights for inventory forecasting and procurement planning.',
      technologies: ['Next.js', 'Supabase', 'Recharts'],
    },
    {
      title: 'SongTube',
      period: 'Jan 2023 – Apr 2023',
      description:
        'Created a web and mobile application tailored for music practice, allowing users to loop or jump between sections of YouTube videos and share their practice configuration.',
      technologies: ['Next.js', 'Java', 'Firebase'],
    },
  ];

  return (
    <section id="projects" className="mt-8 scroll-mt-16">
      <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-700"
          >
            <h3 className="mb-2 text-xl">{project.title}</h3>
            <p className="mb-3 text-sm">{project.period}</p>

            <p className="mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
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
