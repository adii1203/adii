import Image from "next/image";
import img from "@/public/project.jpg";
import profileImg from "@/public/profile.png";
import { SocialCard } from "@/components/social";
import { Space_Grotesk } from "next/font/google";
import SectionHead from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <main
      className={`max-w-[90%] md:max-w-[60%] mx-auto border-border border-l border-r border-dashed min-h-screen px-4 py-4 ${SpaceGrotesk.variable}`}>
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
        <div className="border bg-card p-2 rounded-md font-space xl:flex gap-4 space-y-4 w-fit xl:w-full mx-auto">
          <div className="rounded overflow-hidden w-full xl:w-96 h-48 aspect-square">
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between w-full">
              <p className="capitalize text-lg font-bold">bookmark</p>
              <div className="flex gap-2">
                <Button variant={"outline"} size={"icon"} className="w-8 h-8">
                  <a
                    href="https://github.com/adii1203/bookmark"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </Button>
                <Button variant={"outline"} size={"icon"} className="w-8 h-8">
                  <a
                    href="https://savedev.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-sm break-words md:w-full">
                A simple bookmark manager that allows you to save your favorite
                links.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant={"default"}>NextJS</Badge>
                <Badge variant={"default"}>Postgres</Badge>
                <Badge variant={"default"}>Typescript</Badge>
                <Badge variant={"default"}>AuthJS</Badge>
                <Badge variant={"default"}>Tanstack</Badge>
                <Badge variant={"default"}>Tailwind</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
