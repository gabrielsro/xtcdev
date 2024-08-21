"use client";

import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { handleContactMessage } from "@/lib/actions";
import RingLoader from "@/ui/loaders/ringLoader";

function SubmitButton() {
  const data = useFormStatus();
  console.log(data);
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

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: { value: "", errors: [] },
    email: { value: "", errors: [] },
    message: { value: "", errors: [] },
  });

  const [finalState, formAction] = useFormState(
    handleContactMessage,
    formState
  );

  useEffect(() => {
    console.log("effect");
    if (finalState.processed) {
      console.log("processed");
      delete finalState.processed;
      const finalEntries = Object.entries(finalState);
      console.log(finalEntries);
      if (finalEntries.every((e: any) => e[1].errors.length < 1)) {
        console.log("no errors");
        setFormState({
          name: { value: "", errors: [] },
          email: { value: "", errors: [] },
          message: { value: "", errors: [] },
        });
        console.log("Form state:");
        console.log(formState);
      }
    }
  }, [finalState.processed]);

  return (
    <form className="flex flex-col gap-2 w-[350px]" action={formAction}>
      <p>Contact us for more information</p>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formState.name.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.name.value = e.target.value;
          setFormState(newState);
        }}
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formState.email.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.email.value = e.target.value;
          setFormState(newState);
        }}
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your message..."
        rows={5}
        value={formState.message.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.message.value = e.target.value;
          setFormState(newState);
        }}
        className="bg-black border-white border-[1px] rounded-sm px-1"
      />
      <SubmitButton />
    </form>
  );
}
