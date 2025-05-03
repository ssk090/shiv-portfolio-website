import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Infosys Ltd.",
    year: "2020 - 2023",
    title: "Senior Systems Engineer",
    results: [
      {
        title:
          "Built scalable web apps using React, Angular, and TypeScript",
      },
      {
        title:
          "Improved app performance and usability across multiple projects.",
      },
      {
        title:
          "Delivered features, fixed bugs, and integrated APIs in agile teams.",
      },
      {
        title:
          "Boosted user experience by up to 60%.",
      },
      {
        title:
          "Increased UI reusability and unit test coverage from 65% to 85%.",
      },
      {
        title:
          "Supported deployments using Spring Boot, Git, and MySQL.",
      },
    ],
    link: "https://drive.google.com/file/d/1Qd1jUONkFZe2ePuAk14_aJY8TQzpd7s0/view?usp=sharing",
  },
  {
    company: "Altir India Pvt. Ltd.",
    year: "2023 - Present",
    title: "Software Engineer",
    results: [
      {
        title:
          "Developed and debugged web apps using React, TypeScript, and related libraries.",
      },
      {
        title:
          "Improved app performance, functionality, and user experience.",
      },
      {
        title:
          "Self-learned React Native and built a cross-platform mobile app in 2 months.",
      },
      {
        title:
          "Received client appreciation for timely mobile app delivery.",
      },
      {
        title:
          "Collaborated with designers, backend developers, and QA teams.",
      },
      {
        title:
          "Delivered clean, efficient, and reliable code on schedule.",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Career Highlights"
          description="Explore how I turned challenges into impactful outcomes across various companies"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16"> */}
              <div className="lg:gap-16">
                <div className="pb-16">
                  <div className="bg-gradient-to-r from-slate-600 to-sky-700 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
