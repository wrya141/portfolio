import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import Aboutdet from "@/components/about";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
//import HatModel from "@/components/models/HatModel";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        sizes="100vw"
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50  top-0 left-0 w-full h-full fixed object-cover object-center opacity-50"
        priority
      />

      <div className="w-full h-3/5 xs:h-3/4  sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center sm:top-[60%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Wrya
          </h1>
          <p className="font-light text-foreground text-ls m-8">
            Meet the guy behind this projects
          </p>
        </div>
      </div>
      <Aboutdet />
    </>
  );
}
