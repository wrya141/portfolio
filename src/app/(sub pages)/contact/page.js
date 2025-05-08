import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import dynamic from "next/dynamic";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50  top-0 left-0 w-full h-full fixed object-cover object-center opacity-50"
      />
      <article className="relative w-full felx flex-col justify-center items-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="font-semibold text-accent text-center text-4xl capitalize">
            Summon the wizzard
          </h1>
          <p className="text-center font-light text-sm  xs:text-base">
            for contact please Email me!
          </p>
          <Form />
        </div>
      </article>
    </>
  );
}
