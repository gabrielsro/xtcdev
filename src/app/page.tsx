import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/ui/effects/typewriter-effect";
import ContactForm from "./_components/contactForm";
import ThreeWorld from "./_components/threeWorld";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="text-teal-300 text-5xl font-semibold">XTCDEV</div>
      <div className="py-20">
        {/* <TypewriterEffect
          words={[
            { text: "Get" },
            { text: "your", className: "text-green-200 " },
            { text: "own", className: "text-green-200" },
            { text: "website" },
            { text: "today." },
          ]}
        /> */}
      </div>
      <div className="flex flex-col place-items-center pb-14 md:flex-row-reverse lg:pb-28 lg:gap-16">
        <ContactForm />
        <ThreeWorld />
      </div>
    </div>
  );
}
