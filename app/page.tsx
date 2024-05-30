import Image from "next/image";
import img from "@/public/profile.png";
import { SocialCard } from "@/components/social";
import { Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <main className="max-w-[90%] md:max-w-[60%] mx-auto border-border border-l border-r border-dashed min-h-screen px-4 py-4">
      <section
        className={`${SpaceGrotesk.variable} space-y-2 font-space border-border border-b border-double pt-6`}>
        <div className="w-12 rounded-full overflow-hidden">
          <Image src={img} alt="" />
        </div>
        <div>
          <p className="font-bold text-xl tracking-wider">Aditya</p>
          <p className="text-muted-foreground tracking-wide">Devloper</p>
        </div>
        <SocialCard />
      </section>
    </main>
  );
}
