import Image from "next/image";
import profileImg from "@/public/profile.png";
import { SocialCard } from "@/components/social";
import { Space_Grotesk } from "next/font/google";
import SectionHead from "@/components/section-head";
import TechStack from "@/components/tech-stact";
import ProjectCard from "@/components/project-card";
import { projectData } from "@/lib/project";
import { BadgeProps } from "@/components/ui/badge";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <main
      className={`max-w-[90%] md:w-[80%] mx-auto border-border border-l border-r border-dashed min-h-screen px-4 py-4 ${SpaceGrotesk.variable}`}>
      <section
        className={`space-y-2 font-space border-border border-b border-double pt-6`}>
        <div className="w-12 rounded-full overflow-hidden">
          <Image src={profileImg} alt="" />
        </div>
        <div>
          <p className="font-bold text-xl tracking-wider">Aditya</p>
          <p className="text-muted-foreground tracking-wide">Devloper</p>
        </div>
        <SocialCard />
      </section>
      <section>
        <SectionHead
          title="About"
          subTitle="A passionate developer from India, with a deep love for crafting
        beautiful, responsive, and user-friendly web apps."
        />
      </section>
      <section>
        <SectionHead
          title="Projects"
          subTitle="A collection of projects that I have worked on."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projectData.map((project, idx) => {
            return (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                techStack={project.techStack.map((item) => ({
                  ...item,
                  varient: item.varient as BadgeProps["variant"],
                }))}
                github={project.github}
                live={project.live}
                imageUrl={project.imageUrl}
              />
            );
          })}
        </div>
      </section>
      <TechStack />
    </main>
  );
}
