import World from "@/ui/effects/world";

export default function ThreeWorld() {
  return (
    <div className="relative">
      <div className="w-screen min-h-[320px] md:w-[550px] md:h-[550px]">
        <World />
      </div>
      <div className="absolute top-40 right-2 grid grid-cols-[25px,auto] gap-x-3 gap-y-2 md:hidden">
        <img src="/icons/phone1.svg" alt="Phone" className="w-6 h-6" />
        <p>+1 (463) 239-8161</p>
        <img src="/icons/email1.svg" alt="Email" className="w-6 h-6" />
        <p>contact@xtcdev.com</p>
      </div>
    </div>
  );
}
