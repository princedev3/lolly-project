import { generateVerificationtokenbyemail } from "@/action/generate-token-action-by-email";
import { sendVerificationEmail } from "@/action/send-emails";
import prisma from "@/static-data/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    return NextResponse.json({ message: "email verified", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "fail to verify email", status: 500 });
  }
};
