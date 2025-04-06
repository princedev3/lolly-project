"use server";
import Mail from "nodemailer/lib/mailer";
import { createTransport } from "nodemailer";

const transport = createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS_KEY,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env
    .NEXT_PUBLIC_BASE_URL!}/verify-email?token=${token}`;
  const mailOptions: Mail.Options = {
    from: "Lolly's",
    to: email,
    subject: "Email Confirmation",
    html: `
<html>
  <head>
    <style>
      /* Inline styles for the email */
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin:  auto;
        background-color: #ffffff;
       
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
      .header img {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
      }
      h1 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
      }
      .btn {
        display: block; /* Changed from inline-flex to block */
        width: 100%; /* Ensure it takes up full width */
        text-align: center; /* Center the link inside the button */
        background-color: #28a745;
        color: #fff;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        text-decoration: none;
        margin: 10px 0;
      }
      .btn a {
        color: inherit; /* Ensure the link inherits the button text color */
        text-decoration: none; /* Remove underline from the link */
        display: inline-block; /* Make the link behave like a block */
      }
      .footer {
        text-align: center;
        margin-top: 20px;
      }
      .social-links {
        display: inline-block;
        text-align: center;
      }
      .social-links a {
        margin: 0 10px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Verify your email address</h1>
      <p>Kindly click the link below to verify your email</p>
      <div class="btn">
        <a href="${confirmLink}">Click here to confirm your email</a>
      </div>

      <div class="footer">
        <p>Follow us on</p>
        <div class="social-links">
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  </body>
</html>


  `,
  };
  try {
    const info = await transport.sendMail(mailOptions);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
