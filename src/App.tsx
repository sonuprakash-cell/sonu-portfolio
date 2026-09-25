import {
  ArrowUpRight,
  Download,
  Mail,
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#080808]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-10">

          <a
            href="#home"
            className="text-[20px] font-semibold tracking-[0.25em]"
          >
            SONUPRAKASH T M
          </a>

          <nav className="hidden items-center gap-12 md:flex">
            <a
              href="#about"
              className="text-[17px] text-white/65 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-[17px] text-white/65 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-[17px] text-white/65 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-[17px] text-white/65 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-[17px] text-white/65 transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sonuprakash78368@gmail.com&su=Opportunity%20for%20Sonuprakash"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <span>Let's connect</span>

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <main id="home">

        <section className="relative min-h-screen overflow-hidden pt-[88px]">

          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[28%] top-[8%] h-[650px] w-[650px] rounded-full bg-[#32145c]/20 blur-[150px]" />

            <div className="absolute right-[-8%] top-[20%] h-[650px] w-[650px] rounded-full bg-[#35105b]/15 blur-[180px]" />
          </div>


          {/* Decorative circle */}
          <div className="pointer-events-none absolute left-[46%] top-[46%] h-[560px] w-[560px] rounded-full border border-violet-500/10" />

          <div className="pointer-events-none absolute left-[48%] top-[49%] h-[470px] w-[470px] rounded-full border border-violet-500/10" />


          {/* ================= HERO CONTENT ================= */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-[1600px] items-center px-10">

            {/* LEFT CONTENT */}
            <div className="relative z-30 w-[53%] pb-16">

              {/* Small heading */}
              <div className="mb-12 flex items-center gap-5">

                <span className="text-[14px] font-medium uppercase tracking-[0.3em] text-violet-300">
                  QA Automation Engineer
                </span>

              </div>


              {/* Main heading */}
              <h1 className="max-w-[760px] text-[clamp(70px,6.5vw,112px)] font-medium leading-[0.91] tracking-[-0.055em]">

                <span className="block">
                  Building
                </span>

                <span className="block">
                  reliable
                </span>

                <span className="block bg-gradient-to-r from-white via-white to-violet-300 bg-clip-text text-transparent">
                  automation
                </span>

                <span className="block">
                  systems.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-12 max-w-[720px] text-[19px] leading-[1.9] text-white/60">

                Software testing and automation engineer with 4 years of
                experience building reliable test solutions using Python,
                PyTest, API automation and CI/CD. Experienced in enterprise
                storage systems and continuously expanding into Playwright
                and AI engineering.

              </p>


              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  'Python',
                  'PyTest',
                  'API Testing',
                  'Playwright',
                  'CI/CD',
                  'SQL',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2 text-[14px] text-white/75"
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-black transition hover:bg-white/90"
                >
                  <span className="text-black">
                    View Projects
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>


                <a
                  href="/Sonuprakash-Resume.pdf"
                  download="Sonuprakash-T-M-Resume.pdf"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] text-white/80 transition hover:border-white/40 hover:bg-white/5"
                >
                  <Download size={16} />
                  Download Resume
                </a>

              </div>

            </div>


            {/* ================= RIGHT PHOTO AREA ================= */}
            <div className="pointer-events-none absolute bottom-0 left-[44%] top-[-2%] z-10 w-[56%] overflow-hidden">

              {/* Purple ambient glow behind photo */}
              <div className="absolute left-[15%] top-[25%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />


              {/* PHOTO */}

              <img
                src="/profile.jpg"
                alt="Sonuprakash"
                className="absolute"
                style={{
                  /*
                   * LEFT / RIGHT POSITION
                   *
                   * Moving left makes the face sit closer
                   * to the main heading.
                   */
                  left: '-9%',

                  /*
                   * Slightly larger than before.
                   */
                  width: '120%',

                  /*
                   * Keep the image below the heading area.
                   */
                  top: '-2%',

                  height: '124%',

                  /*
                   * Preserve the original photo proportions.
                   */
                  objectFit: 'contain',

                  /*
                   * Keep the face slightly above center.
                   */
                  objectPosition: '50% 16%',

                  transform: 'scale(1.17)',

                  transformOrigin: 'center center',

                  /*
                   * Fade the bottom into the page.
                   */
                  maskImage:
                    'linear-gradient(to bottom, black 78%, transparent 100%)',

                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 78%, transparent 100%)',
                }}
              />


              {/* Dark gradient between text and photo */}
              <div
                className="absolute inset-y-0 left-0 w-[28%]"
                style={{
                  background:
                    'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.85) 20%, rgba(8,8,8,0) 100%)',
                }}
              />


              {/* Right side soft fade */}
              <div
                className="absolute inset-y-0 right-0 w-[10%]"
                style={{
                  background:
                    'linear-gradient(to left, #080808 0%, transparent 100%)',
                }}
              />


              {/* Decorative text */}
              <div className="absolute right-[7%] top-[38%] flex flex-col items-end gap-4 text-[11px] uppercase tracking-[0.45em] text-white/30">

                <span>
                  Automate
                </span>

                <span>
                  Improve
                </span>

                <span className="text-violet-400/70">
                  Repeat
                </span>

              </div>


              {/* Experience indicator */}
              <div className="absolute bottom-[10%] right-[10%]">

                <p className="mb-2 text-[11px] uppercase tracking-[0.4em] text-white/35">
                  Experience
                </p>

                <p className="text-[30px] font-medium text-white/90">
                  4+ Years
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="border-t border-white/10 px-10 py-32"
        >
          <div className="mx-auto max-w-[1400px]">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-300">
              About
            </p>

            <h2 className="max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
              Engineering reliable software through automation.
            </h2>

            <p className="mt-10 max-w-4xl text-lg leading-8 text-white/55">
              QA Automation Engineer with 4 years of experience in software testing and
              automation, specializing in Python, PyTest, API testing, CI/CD, and
              enterprise system validation. Experienced in building functional and
              regression automation for NetApp ONTAP, performing system-level testing,
              analyzing defects, and improving automation reliability.
              <br />
              <br />
              Alongside my professional experience, I build hands-on projects with
              Playwright, TypeScript, RAG, LLMs, and multi-agent systems, applying modern
              technologies to explore better approaches to test automation and software
              engineering.
            </p>

          </div>
        </section>


        {/* ================= EXPERIENCE ================= */}
        <section
          id="experience"
          className="border-t border-white/10 px-10 py-32"
        >
          <div className="mx-auto max-w-[1400px]">

            {/* Section heading */}
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-300">
              Experience
            </p>

            <h2 className="mb-20 text-5xl font-medium tracking-tight md:text-7xl">
              Professional experience.
            </h2>


            {/* ================= SENIOR SOFTWARE ENGINEER ================= */}
            <div className="border-t border-white/10 py-14">

              <div className="grid gap-10 md:grid-cols-[220px_1fr]">

                {/* Year */}
                <div>
                  <p className="text-sm tracking-wide text-white/40">
                    2023 — 2026
                  </p>
                </div>


                {/* Experience content */}
                <div>

                  <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                    Senior Software Engineer
                  </h3>

                  <p className="mt-2 text-base text-violet-300">
                    QA Automation · Python · PyTest · NetApp ONTAP
                  </p>


                  <p className="mt-7 max-w-4xl text-[17px] leading-8 text-white/55">
                    Developed and maintained Python and PyTest-based test automation
                    for enterprise storage systems, supporting CIT and FBOT testing
                    and release validation across multiple NetApp ONTAP releases.
                  </p>


                  {/* Responsibilities */}
                  <div className="mt-8 space-y-4">

                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Built and maintained automation for functional and regression
                        testing across ONTAP environments.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Automated and validated core storage workflows involving
                        Snapshots, SnapMirror, replication and failover scenarios.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Worked on CIT and FBOT automation, investigating failures and
                        improving test stability.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Performed defect triage and root-cause analysis, collaborating
                        with development and QA teams to identify and resolve software
                        and automation issues.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Supported ZAPI/ONTAPI to REST API migration by validating
                        REST-based workflows and performing regression testing.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Performed ONTAP upgrade and revert validation across different
                        releases.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Conducted security testing using Tenable Nessus, Codenomicon
                        and Netsparker.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Executed and monitored automated test suites through Jenkins
                        CI/CD pipelines and managed testing activities using JIRA,
                        qTest, Perforce and Confluence.
                      </p>
                    </div>

                  </div>


                  {/* Skills */}
                  <div className="mt-10">

                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                      Core Skills
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'PyTest',
                        'Test Automation',
                        'Functional Testing',
                        'Regression Testing',
                        'API Testing',
                        'REST API',
                        'Jenkins',
                        'CI/CD',
                        'Linux',
                        'NetApp ONTAP',
                        'SnapMirror',
                        'Snapshots',
                        'Failover',
                        'Defect Triage',
                        'Root Cause Analysis',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/50 transition hover:border-violet-400/30 hover:text-white/80"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* Impact */}
                  <div className="mt-12 border-t border-white/10 pt-8">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                      Impact
                    </p>

                    <div className="mt-4 flex items-end gap-4">

                      <span className="text-5xl font-medium tracking-tight text-white">
                        40%
                      </span>

                      <p className="max-w-md pb-1 text-sm leading-6 text-white/45">
                        Reduction in CIT/FBOT automation failures through framework
                        stabilization, debugging and targeted test improvements.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= JUNIOR SOFTWARE ENGINEER ================= */}
            <div className="border-t border-white/10 py-14">

              <div className="grid gap-10 md:grid-cols-[220px_1fr]">

                {/* Year */}
                <div>
                  <p className="text-sm tracking-wide text-white/40">
                    2022 — 2023
                  </p>
                </div>


                {/* Experience content */}
                <div>

                  <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                    Junior Software Engineer
                  </h3>

                  <p className="mt-2 text-base text-violet-300">
                    QA Automation · Python · Functional & Regression Testing
                  </p>


                  <p className="mt-7 max-w-4xl text-[17px] leading-8 text-white/55">
                    Worked on Python-based test automation for enterprise storage
                    software, contributing to functional and regression testing,
                    automation improvements and Agile testing activities.
                  </p>


                  {/* Responsibilities */}
                  <div className="mt-8 space-y-4">

                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Developed and maintained Python automation scripts for
                        functional and regression testing.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Improved testing efficiency through automation improvements
                        and streamlined testing activities.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Investigated software defects and supported root-cause
                        analysis and debugging.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Contributed to REST API migration testing by validating
                        functionality against legacy ZAPI/ONTAPI behavior.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Executed automated test suites through Jenkins CI/CD
                        pipelines and tracked defects using JIRA and qTest.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Collaborated with development and QA teams in an Agile
                        environment to support sprint testing and release activities.
                      </p>
                    </div>

                  </div>


                  {/* Skills */}
                  <div className="mt-10">

                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                      Core Skills
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'Test Automation',
                        'Functional Testing',
                        'Regression Testing',
                        'REST API Testing',
                        'Jenkins',
                        'CI/CD',
                        'JIRA',
                        'qTest',
                        'Agile',
                        'Defect Analysis',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/50 transition hover:border-violet-400/30 hover:text-white/80"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* Impact */}
                  <div className="mt-12 border-t border-white/10 pt-8">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                      Impact
                    </p>

                    <div className="mt-4 flex items-end gap-4">

                      <span className="text-5xl font-medium tracking-tight text-white">
                        25%
                      </span>

                      <p className="max-w-md pb-1 text-sm leading-6 text-white/45">
                        Improvement in project efficiency through automation
                        improvements and streamlined testing activities.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= PYTHON FULL STACK INTERN ================= */}
            <div className="border-t border-white/10 py-14">

              <div className="grid gap-10 md:grid-cols-[220px_1fr]">

                {/* Year */}
                <div>
                  <p className="text-sm tracking-wide text-white/40">
                    2022
                  </p>
                </div>


                {/* Experience content */}
                <div>

                  <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                    Python Full Stack Developer Intern
                  </h3>

                  <p className="mt-2 text-base text-violet-300">
                    Python · Django · REST API · SQL
                  </p>


                  <p className="mt-7 max-w-4xl text-[17px] leading-8 text-white/55">
                    Developed web applications and REST APIs while gaining hands-on
                    experience in backend development, database interaction and
                    software testing.
                  </p>


                  {/* Responsibilities */}
                  <div className="mt-8 space-y-4">

                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Developed web applications using Python and Django.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Built REST APIs using Django REST Framework.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Performed unit, functional and API testing while validating
                        application behavior and backend responses.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Worked with SQL databases for application data and validation.
                      </p>
                    </div>


                    <div className="flex gap-4">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-[16px] leading-7 text-white/60">
                        Worked with HTML, CSS and JavaScript for frontend development.
                      </p>
                    </div>

                  </div>


                  {/* Skills */}
                  <div className="mt-10">

                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                      Core Skills
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'Django',
                        'Django REST Framework',
                        'REST API',
                        'API Testing',
                        'SQL',
                        'HTML',
                        'CSS',
                        'JavaScript',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/50 transition hover:border-violet-400/30 hover:text-white/80"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="border-t border-white/10 px-10 py-32"
        >
          <div className="mx-auto max-w-[1400px]">

            {/* Section heading */}
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-300">
              Projects
            </p>

            <h2 className="text-5xl font-medium tracking-tight md:text-7xl">
              Selected work.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/45">
              A combination of enterprise automation experience and hands-on
              engineering projects across test automation, API validation,
              system testing and AI engineering.
            </p>


            {/* =========================================================
                PROFESSIONAL PROJECTS
            ========================================================= */}
            <div className="mt-24">

              <div className="mb-10 flex items-center gap-5">

                <span className="h-px w-12 bg-violet-400/60" />

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                    Professional Experience
                  </p>

                  <h3 className="mt-2 text-3xl font-medium">
                    Enterprise automation projects
                  </h3>
                </div>

              </div>


              <div className="grid gap-6 md:grid-cols-2">


                {/* =====================================================
                    PROJECT 01
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                        Professional Project · 01
                      </p>

                      <h4 className="mt-5 text-3xl font-medium tracking-tight">
                        Enterprise Storage Test Automation
                      </h4>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35">
                      Enterprise QA
                    </span>

                  </div>


                  <p className="mt-6 text-[16px] leading-7 text-white/50">
                    Developed and maintained Python and PyTest-based test automation
                    for enterprise storage systems, supporting CIT and FBOT testing
                    and release validation across multiple NetApp ONTAP releases.
                  </p>


                  {/* Key work */}
                  <div className="mt-8 space-y-3">

                    {[
                      'Functional and regression automation across ONTAP environments',
                      'Validation of Snapshots, SnapMirror, replication and failover workflows',
                      'CIT and FBOT automation stabilization and failure analysis',
                      'Defect triage, debugging and root-cause analysis',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                        <p className="text-sm leading-6 text-white/55">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>


                  {/* Skills */}
                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/25">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'PyTest',
                        'NetApp ONTAP',
                        'SnapMirror',
                        'Snapshots',
                        'Failover',
                        'Jenkins',
                        'CI/CD',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* Impact */}
                  <div className="mt-10 border-t border-white/10 pt-6">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                      Impact
                    </p>

                    <div className="mt-3 flex items-baseline gap-3">

                      <span className="text-4xl font-medium text-white">
                        40%
                      </span>

                      <span className="text-sm text-white/45">
                        reduction in CIT/FBOT automation failures
                      </span>

                    </div>

                  </div>

                </article>


                {/* =====================================================
                    PROJECT 02
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                        Professional Project · 02
                      </p>

                      <h4 className="mt-5 text-3xl font-medium tracking-tight">
                        REST API Migration & Validation
                      </h4>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35">
                      API Testing
                    </span>

                  </div>


                  <p className="mt-6 text-[16px] leading-7 text-white/50">
                    Supported the migration of legacy ZAPI/ONTAPI workflows to
                    REST APIs by validating REST-based functionality against
                    existing behavior and performing functional and regression
                    testing.
                  </p>


                  <div className="mt-8 space-y-3">

                    {[
                      'Validated REST API functionality against legacy workflows',
                      'Performed functional and regression testing during migration',
                      'Investigated compatibility issues and automation failures',
                      'Supported defect analysis and release validation',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                        <p className="text-sm leading-6 text-white/55">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>


                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/25">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'REST API',
                        'API Testing',
                        'Regression Testing',
                        'JSON',
                        'Jenkins',
                        'CI/CD',
                        'JIRA',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  <div className="mt-10 border-t border-white/10 pt-6">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                      Focus
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      API compatibility · Migration validation · Regression testing
                    </p>

                  </div>

                </article>


                {/* =====================================================
                    PROJECT 03
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                        Professional Project · 03
                      </p>

                      <h4 className="mt-5 text-3xl font-medium tracking-tight">
                        Enterprise Release & Upgrade Validation
                      </h4>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35">
                      System Testing
                    </span>

                  </div>


                  <p className="mt-6 text-[16px] leading-7 text-white/50">
                    Performed system-level functional and regression validation
                    across multiple NetApp ONTAP releases, including upgrade and
                    revert scenarios, while validating critical storage workflows
                    and supporting release readiness.
                  </p>


                  <div className="mt-8 space-y-3">

                    {[
                      'Validated ONTAP upgrade and revert scenarios',
                      'Performed system-level functional and regression testing',
                      'Validated storage workflows across different releases',
                      'Investigated failures and supported release readiness',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                        <p className="text-sm leading-6 text-white/55">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>


                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/25">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Python',
                        'PyTest',
                        'Linux',
                        'NetApp ONTAP',
                        'System Testing',
                        'Regression Testing',
                        'Jenkins',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  <div className="mt-10 border-t border-white/10 pt-6">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                      Focus
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Release validation · Upgrade testing · System testing
                    </p>

                  </div>

                </article>


                {/* =====================================================
                    PROJECT 04
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                        Professional Project · 04
                      </p>

                      <h4 className="mt-5 text-3xl font-medium tracking-tight">
                        Enterprise Security Testing
                      </h4>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35">
                      Security Testing
                    </span>

                  </div>


                  <p className="mt-6 text-[16px] leading-7 text-white/50">
                    Performed security testing and vulnerability assessment of
                    enterprise software using industry security testing tools,
                    supporting issue identification, analysis and validation.
                  </p>


                  <div className="mt-8 space-y-3">

                    {[
                      'Performed vulnerability and security assessments',
                      'Analyzed identified security issues and test results',
                      'Supported defect investigation and validation',
                      'Integrated security validation into enterprise testing activities',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                        <p className="text-sm leading-6 text-white/55">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>


                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/25">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        'Tenable Nessus',
                        'Codenomicon',
                        'Netsparker',
                        'Linux',
                        'Security Testing',
                        'Defect Analysis',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>


                  <div className="mt-10 border-t border-white/10 pt-6">

                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                      Focus
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      Vulnerability assessment · Security validation · Defect analysis
                    </p>

                  </div>

                </article>

              </div>

            </div>


            {/* =========================================================
                PERSONAL ENGINEERING PROJECTS
            ========================================================= */}
            <div className="mt-32">

              <div className="mb-10 flex items-center gap-5">

                <span className="h-px w-12 bg-violet-400/60" />

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                    Personal Engineering
                  </p>

                  <h3 className="mt-2 text-3xl font-medium">
                    Building beyond professional work
                  </h3>

                </div>

              </div>


              <div className="grid gap-6 md:grid-cols-3">


                {/* =====================================================
                    TESTFORGE
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                    Playwright
                  </p>

                  <h4 className="mt-5 text-3xl font-medium">
                    TestForge
                  </h4>

                  <p className="mt-5 leading-7 text-white/50">
                    End-to-end test automation framework built with TypeScript and
                    Playwright using Page Object Model, API testing and CI/CD
                    integration.
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      'TypeScript',
                      'Playwright',
                      'POM',
                      'API Testing',
                      'CI/CD',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>


                  <a
                    href="https://github.com/sonuprakash-cell/testforge-playwright"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    View project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </article>


                {/* =====================================================
                    VENTUREMIND AI
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                    AI / RAG
                  </p>

                  <h4 className="mt-5 text-3xl font-medium">
                    VentureMind AI
                  </h4>

                  <p className="mt-5 leading-7 text-white/50">
                    An AI-powered startup validation system that uses RAG and multi-agent workflows to analyze startup ideas. 
                    Built with LangChain, CrewAI, ChromaDB and Streamlit.
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      'Python',
                      'RAG',
                      'LangChain',
                      'CrewAI',
                      'ChromaDB',
                      'Streamlit',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>


                  <a
                    href="https://github.com/sonuprakash-cell/venturemind-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    View project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </article>


                {/* =====================================================
                    LINKEDIN OPTIMIZER
                ===================================================== */}
                <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.035]">

                  <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                    GenAI
                  </p>

                  <h4 className="mt-5 text-3xl font-medium">
                    LinkedIn Optimizer
                  </h4>

                  <p className="mt-5 leading-7 text-white/50">
                    AI-powered LinkedIn profile optimization workflow using LLMs,
                    prompt engineering, multi-agent architecture and the OpenAI API.
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      'Python',
                      'LLM',
                      'Prompt Engineering',
                      'Multi-Agent',
                      'OpenAI API',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>


                  <a
                    href="https://github.com/sonuprakash-cell/linkedin-profile-optimizer"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
                  >
                    View project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </article>

              </div>

            </div>

          </div>
        </section>


        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="border-t border-white/10 px-10 py-32"
        >
          <div className="mx-auto max-w-[1400px]">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-300">
              Skills
            </p>

            <h2 className="text-5xl font-medium tracking-tight md:text-7xl">
              Tools I work with.
            </h2>

            <div className="mt-20 grid gap-6 md:grid-cols-3">

              {/* Automation */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.035]">

                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Automation
                </p>

                <h3 className="mt-4 text-2xl font-medium">
                  Test Automation
                </h3>

                <div className="mt-8 flex flex-wrap gap-2">

                  {[
                    'Python',
                    'PyTest',
                    'Playwright',
                    'TypeScript',
                    'POM',
                    'Functional Testing',
                    'Regression Testing',
                    'API Testing',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/55 transition hover:border-white/25 hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* Engineering */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.035]">

                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Engineering
                </p>

                <h3 className="mt-4 text-2xl font-medium">
                  Engineering & Infrastructure
                </h3>

                <div className="mt-8 flex flex-wrap gap-2">

                  {[
                    'Jenkins',
                    'Git',
                    'GitHub Actions',
                    'REST APIs',
                    'CI/CD',
                    'Linux',
                    'SQL',
                    'PostgreSQL',
                    'MySQL',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/55 transition hover:border-white/25 hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* Systems & AI */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.035]">

                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  Systems & AI
                </p>

                <h3 className="mt-4 text-2xl font-medium">
                  Systems & AI Engineering
                </h3>

                <div className="mt-8 flex flex-wrap gap-2">

                  {[
                    'NetApp ONTAP',
                    'RAG',
                    'LangChain',
                    'CrewAI',
                    'LLM Integration',
                    'Multi-Agent Systems',
                    'ChromaDB',
                    'Streamlit',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/55 transition hover:border-white/25 hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="border-t border-white/10 px-10 py-32"
        >
          <div className="mx-auto max-w-[1400px]">

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-300">
              Contact
            </p>

            <h2 className="max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
              Let's build something reliable.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
              Open to QA Automation Engineer, SDET, and Python Automation opportunities
              where I can apply my automation experience, build reliable test solutions,
              and contribute to modern engineering initiatives.
            </p>

            {/* Gmail button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sonuprakash78368@gmail.com&su=Opportunity%20for%20Sonuprakash"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-black transition hover:bg-white/90"
            >
              <Mail
                size={17}
                strokeWidth={2}
                className="text-black"
              />

              <span className="text-black">
                Get in touch
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </section>


        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 px-10 py-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-5 text-sm text-white/35 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Sonuprakash T M
            </p>

            <div className="flex items-center gap-6">

              <a
                href="https://www.linkedin.com/in/sonuprakash/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>

              <p>
                QA Automation Engineer
              </p>

            </div>

          </div>
        </footer>

      </main>

    </div>
  )
}

export default App