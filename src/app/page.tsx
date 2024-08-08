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
        <World />
        <div className="absolute top-40 right-0">
          <p>+1 4632398161</p>
          <p>xtcdev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
