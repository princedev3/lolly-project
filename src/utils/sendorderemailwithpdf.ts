import nodemailer from "nodemailer";
import fs from "fs/promises";
import { Order } from "@prisma/client";
import { generateOrderPdf } from "./generate-pdf";
import { cleanupTempFolder } from "./cleantemp";

export const sendEmailWithPdf = async (orderDetails: Order) => {
  try {
    const pdfPath = await generateOrderPdf(orderDetails);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS_KEY,
      },
    });

    const orderLink = `${process.env.BASE_URL_!}/order/${orderDetails.id}`;

    const mailOptions = {
      from: `Lolly Collections ${process.env.EMAIL}`,
      to: orderDetails.useremail,
      subject: "Your Order Confirmation",
      html: `
        <p>Hello ${orderDetails.useremail},</p>
        <p>Thank you for your order! Your order details are attached.</p>
      <a href="${orderLink}">To view your order</a>
      `,
      attachments: [
        {
          filename: `order-${orderDetails.id}.pdf`,
          path: pdfPath,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    await fs.unlink(pdfPath);
    console.log("🧹 Temporary PDF deleted");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  } finally {
    await cleanupTempFolder();
  }
};
