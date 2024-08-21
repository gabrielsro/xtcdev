import { FromContactTemplate } from "@/components/email-templates/from-contact-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Brazzers <contact@xtcdev.com>",
      to: ["contact@xtcdev.com"],
      subject: "hola",
      react: FromContactTemplate({
        email: "aristides@deepr.com",
        message: "this is a message",
        name: "Aristides Rojas",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log(Response.json({ data }));

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
