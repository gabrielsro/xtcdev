import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/ui/effects/typewriter-effect";
import World from "@/ui/effects/world";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="text-teal-300 text-5xl font-semibold">XTCDEV</div>
      <div className="py-20">
        <TypewriterEffect
          words={[
            { text: "Get" },
            { text: "your", className: "text-green-200 " },
            { text: "own", className: "text-green-200" },
            { text: "website" },
            { text: "today." },
          ]}
        />
      </div>
      <div className="relative">
        <div className="w-screen min-h-[320px] md:w-[550px] md:h-[550px]">
          <World />
        </div>
        <div className="absolute top-40 right-2 grid grid-cols-[25px,auto] gap-x-3 gap-y-2">
          <img src="/icons/phone1.svg" alt="Phone" className="w-6 h-6" />
          <p>+1 (463) 239-8161</p>
          <img src="/icons/email1.svg" alt="Email" className="w-6 h-6" />
          <p>xtcdev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
