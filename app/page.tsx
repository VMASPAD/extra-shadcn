import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import NavBarTab from "./components/NavBar/NavBarTab";
import CodeBadgeTab from "./components/CodeBadge/CodeBadgeTab";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return ( 
      <section className="w-screen h-screen ">
        <div className="relative h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          
        <BlurFade delay={0.25} inView>
          <p className=" whitespace-pre-wrap text-center text-8xl tracking-tighter text-black dark:text-white font-geist font-extrabold">
            Extra shadcn
          </p>
          </BlurFade>
          <BlurFade delay={0.35} inView>
          <p className=" whitespace-pre-wrap text-center text-4xl tracking-tighter text-black dark:text-white font-geist font-extrabold">
            Components ready to use and import into your project.
          </p>
          </BlurFade>
          <BlurFade delay={0.75} inView>
          <p className=" whitespace-pre-wrap text-center text-xl tracking-tighter text-black dark:text-white font-geist font-normal">
          Compatible with the shadcn configuration (color palette), if you want to contribute to the project don't forget to create an issue!
          </p>
          </BlurFade>
          <div className="grid grid-cols-2 gap-10 z-10">

          <BlurFade delay={0.25} inView>
            <NavBarTab />
            </BlurFade>
            <BlurFade delay={0.65} inView>
            <CodeBadgeTab /></BlurFade>
          </div>
          <DotPattern
            width={15}
            height={15}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </section> 
  );
}
