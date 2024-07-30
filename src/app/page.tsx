import PulseLoader from "@/ui/loaders/pulseLoader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-teal-300 text-5xl font-semibold">XTCDEV</div>
      <div className="flex items-center gap-2">
        <PulseLoader />
        <p>Website under construction</p>
        <PulseLoader />
      </div>
    </main>
  );
}
