import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import NavBarTab from "./components/NavBar/NavBarTab";
import CodeBadgeTab from "./components/CodeBadge/CodeBadgeTab";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="w-screen h-screen "> 
      <div className="relative h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div>
        <BlurFade delay={0.35} inView>
          <p className=" whitespace-pre-wrap text-center text-8xl tracking-tighter text-black dark:text-white font-geist font-extrabold">
            Extra shadcn
          </p>
        </BlurFade>
        <BlurFade delay={0.45} inView>
          <p className=" whitespace-pre-wrap text-center text-4xl tracking-tighter text-black dark:text-white font-geist font-extrabold">
            Components ready to use and import into your project.
          </p>
        </BlurFade>
        <BlurFade delay={0.65} inView className="flex flex-col">
          <p className=" whitespace-pre-wrap text-center text-xl tracking-tighter text-black dark:text-white font-geist font-normal">
            Compatible with the shadcn configuration (color palette), if you
            want to contribute to the project don&apos;t forget to create an issue!
          </p>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <a href="https://github.com/VMASPAD/extra-shadcn">Github</a>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-700 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </BlurFade>  
        </div>
         
        <BlurFade delay={0.85} inView className="grid grid-cols-2 gap-10 ">
            <NavBarTab /> 
            <CodeBadgeTab />
            </BlurFade> 
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
