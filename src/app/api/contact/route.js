import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return Response.json(
      { error: "Email is not configured on the server" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Glass and Windoors Website" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL || GMAIL_USER,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Interested in: ${service || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
