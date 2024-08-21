"use server";
import { FromContactTemplate } from "@/components/email-templates/from-contact-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactMessage(
  previousState: any,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData);
  console.log(rawFormData);
  //RESEND
  try {
    const { data, error } = await resend.emails.send({
      from: "XTCDEV <contact@xtcdev.com>",
      to: ["contact@xtcdev.com"],
      subject: "New contact message",
      react: FromContactTemplate({
        email: `${rawFormData.email}`,
        message: `${rawFormData.message}`,
        name: `${rawFormData.name ? rawFormData.name : "Unknown"}`,
      }),
    });

    if (error) {
      console.log(error);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  previousState.processed = true;
  return previousState;
}
