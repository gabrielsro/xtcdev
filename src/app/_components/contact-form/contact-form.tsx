"use client";

import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import { handleContactMessage } from "@/lib/actions";
import { toast } from "sonner";
import clsx from "clsx";
import { SubmitButton } from "./submit-button";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: { value: "" },
    email: { value: "" },
    message: { value: "" },
  });

  const [finalState, formAction] = useFormState(
    handleContactMessage,
    formState
  );

  useEffect(() => {
    console.log("effect");
    if (finalState.processed) {
      delete finalState.processed;
      if (finalState.sent) {
        toast.success("Message submitted!");
        setFormState({
          name: { value: "" },
          email: { value: "" },
          message: { value: "" },
        });
      }
      if (!finalState.sent) {
        toast.error("There was an error. Please try again later");
      }
    }
  }, [finalState.processed]);

  return (
    <form className="flex flex-col gap-2 w-[350px]" action={formAction}>
      <p>Contact us for more information</p>
      <input
        name="name"
        type="text"
        required
        placeholder="Name"
        value={formState.name.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.name.value = e.target.value;
          setFormState(newState);
        }}
        className={clsx(
          "bg-black border-white border-[1px] rounded-sm px-1",
          finalState.errors?.name.length > 0 && "border-red-400"
        )}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={formState.email.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.email.value = e.target.value;
          setFormState(newState);
        }}
        className={clsx(
          "bg-black border-white border-[1px] rounded-sm px-1",
          finalState.errors?.email.length > 0 && "border-red-400"
        )}
      />
      <textarea
        name="message"
        id="message"
        required
        placeholder="Your message..."
        rows={5}
        value={formState.message.value}
        onChange={(e) => {
          const newState = { ...formState };
          newState.message.value = e.target.value;
          setFormState(newState);
        }}
        className={clsx(
          "bg-black border-white border-[1px] rounded-sm px-1",
          finalState.errors?.message.length > 0 && "border-red-400"
        )}
      />
      <SubmitButton />
    </form>
  );
}
