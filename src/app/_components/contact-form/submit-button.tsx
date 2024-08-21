import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import RingLoader from "@/ui/loaders/ringLoader";

export function SubmitButton() {
  const data = useFormStatus();
  if (data.pending) {
    return (
      <Button disabled className="flex gap-2">
        <RingLoader />
        Loading...
      </Button>
    );
  }
  return <Button>Submit</Button>;
}
