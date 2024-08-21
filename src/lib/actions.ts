"use server";
import { FromContactTemplate } from "@/components/email-templates/from-contact-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactMessage(
  previousState: any,
  formData: FormData
) {
  //ORGANIZE RELEVANT DATA FROM FORM
  const rawFormData = Object.fromEntries(formData);
  delete rawFormData.$ACTION_REF_1;
  delete rawFormData["$ACTION_1:0"];
  delete rawFormData["$ACTION_1:1"];
  delete rawFormData.$ACTION_KEY;

  //VALIDATION
  const contactData = z.object({
    name: z.string().trim().min(1, "Please enter your name"),
    email: z.string().trim().min(1, "An email must be provided").email(),
    message: z.string().trim().min(1, "Message cannot be empty"),
  });

  const parsed = contactData.safeParse(rawFormData);

  //Validation Failed
  if (!parsed.success) {
    console.log("Contact Form Validation Failed:");
    previousState.errors = { name: [], email: [], message: [] };
    for (let i = 0; i < parsed.error.issues.length; i++) {
      previousState.errors[parsed.error.issues[i].path[0]] = [
        ...previousState.errors[parsed.error.issues[i].path[0]],
        parsed.error.issues[i].message,
      ];
    }
    previousState.processed = false;
    console.log(previousState.errors);
    return previousState;
  }

  //RESEND
  console.log("Contact Form Validation Passed:");
  previousState.errors = { name: [], email: [], message: [] };
  try {
    const { data, error } = await resend.emails.send({
      from: `${rawFormData.name} <contact@xtcdev.com>`,
      to: ["contact@xtcdev.com"],
      subject: "XTCDEV contact message",
      replyTo: `${rawFormData.email}`,
      react: FromContactTemplate({
        email: `${rawFormData.email}`,
        message: `${rawFormData.message}`,
        name: `${rawFormData.name ? rawFormData.name : "Unknown"}`,
      }),
    });

    console.log(data);

    if (error) {
      console.log("Error: Message not sent");
      console.log(error);
      previousState.sent = false;
    }

    if (!error) {
      console.log("Success: Message sent");
      previousState.sent = true;
    }
  } catch (error) {
    console.log("Error: Message not sent");
    console.log(error);
    previousState.sent = false;
  }
  previousState.processed = true;
  console.log(rawFormData);
  return previousState;
}
