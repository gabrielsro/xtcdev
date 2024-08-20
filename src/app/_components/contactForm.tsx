import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-2 w-[350px]">
      <p>Contact us for more information</p>
      <input
        type="text"
        placeholder="Name"
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <textarea
        id="message"
        placeholder="Your message..."
        rows={5}
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <Button>Submit</Button>
    </form>
  );
}
