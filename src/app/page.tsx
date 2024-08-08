import World from "@/ui/effects/world";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between pt-16 md:pt-20 pb-60">
      <div className="text-teal-300 text-5xl font-semibold">XTCDEV</div>
      <div className="flex items-center gap-2">
        <p className="whitespace-nowrap">Website under construction</p>
      </div>

      <div className=" lg:flex lg:items-center pt-14 md:pt-0 relative">
        <World />
        <div className="absolute top-40 right-0">
          <p>+1 4632398161</p>
          <p>xtcdev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
