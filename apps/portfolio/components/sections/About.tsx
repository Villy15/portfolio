export default function About() {
  return (
    <section id="about" className="mt-12 scroll-mt-16">
      <h2 className="mb-2 text-[1.8rem] font-semibold leading-tight md:text-[2.3rem]">About</h2>
      <p className="text-muted-foreground mb-8">A bit about me and what I do.</p>

      <div className="space-y-4 leading-relaxed">
        <p>
          Hello! I&apos;m Adrian Villanueva, a Software Engineer passionate about building high-performance,
          user-centric web and mobile applications with modern technologies.
        </p>

        <p>
          With experience in Next.js, React, TypeScript, and Flutter, I specialize in creating intuitive solutions that
          solve real-world problems. I&apos;ve worked on projects ranging from multi-tenant mobile applications for
          tourism cooperatives to AI-integrated messaging platforms at Asurion, where I optimized infrastructure using
          AWS services and automated deployment workflows.
        </p>

        <p>
          Beyond coding, I love exploring new technologies, contributing to open-source projects, and turning ideas into
          reality through personal projects. Currently wrapping up my BS in Information Technology at De La Salle
          University Manila.
        </p>
      </div>
    </section>
  );
}
