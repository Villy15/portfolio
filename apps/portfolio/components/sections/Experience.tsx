export default function Experience() {
  const experiences = [
    {
      title: 'Freelance Software Engineer',
      company: 'Freelance',
      location: 'Remote',
      period: 'Jul 2025 – present',
      type: 'Freelance',
      description:
        'Developed a full-stack clinic EMR system featuring patient management, medical records, and a patient queue module—enabling doctors to efficiently manage consultations and generate digital prescriptions and medical certificates through a modern, responsive web interface. Also developed OrgProfiler, a portable, training-free platform for automated organoid image analysis.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Next.js', 'Python', 'FastAPI'],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Asurion',
      location: 'Taguig, PH',
      period: 'Jul 2024 – Dec 2024',
      type: 'Internship',
      description:
        'Collaborated across the Expert Workspace Messaging and Digital Enrichments Device Care teams to integrate a Twilio-based messaging SDK with AI tools using AWS, automate deployments via GitHub Actions, and develop a React + Contentful CMS web app with optimized GraphQL queries—enhancing infrastructure efficiency, customer engagement, and content delivery.',
      technologies: ['React', 'AWS', 'Twilio', 'GraphQL', 'Contentful CMS', 'GitHub Actions'],
    },
  ];

  const education = {
    school: 'De La Salle University of Manila',
    degree: 'BS in Information Technology',
    period: 'Sept 2019 – Feb 2025',
    gpa: '3.29',
    coursework: [
      'Web Development',
      'Software Engineering',
      'Cybersecurity',
      'Human-Computer Interaction',
      'IT Project Management',
      'Systems Analysis and Design',
      'IT Networking',
      'Data Analysis',
    ],
  };

  return (
    <section id="experience" className="mt-12 scroll-mt-16">
      <h2 className="mb-2 text-[1.8rem] font-semibold leading-tight md:text-[2.3rem]">Experience</h2>
      <p className="text-muted-foreground mb-8">My professional journey and education background.</p>

      <div className="border-border relative space-y-8 border-l-2 pl-8">
        {experiences.map((exp, index) => (
          <article key={index} className="relative">
            {/* Timeline dot */}
            <div className="bg-primary border-background absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2"></div>

            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-primary mt-1">{exp.company}</p>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="text-muted-foreground">{exp.type}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
              </div>
              <div className="text-muted-foreground text-sm">{exp.location}</div>
            </div>

            <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span
                  key={tech}
                  className="border-border bg-background text-foreground rounded border px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="mb-6 text-xl font-semibold">Education</h3>

        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{education.school}</h4>
            <p className="text-primary mt-1">{education.degree}</p>
            <div className="mt-1 flex flex-wrap gap-2 text-sm">
              <span className="text-muted-foreground">Grades: {education.gpa}</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">{education.period}</div>
        </div>

        <div className="mt-4">
          <p className="text-muted-foreground mb-2 text-sm font-medium">Coursework:</p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map(course => (
              <span
                key={course}
                className="border-border bg-background text-foreground rounded border px-2 py-1 text-xs"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
