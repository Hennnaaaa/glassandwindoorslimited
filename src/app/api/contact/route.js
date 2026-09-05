import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json(
      { error: "Email is not configured on the server" },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Glass and Windoors Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || SMTP_USER,
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
