import { createTransport } from "nodemailer";
import {
  EMAIL_SMTP_HOSTNAME,
  EMAIL_PORT,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
} from "#environment/vars";

import type { SendMailOptions } from "nodemailer";

const transporter = createTransport(
  {
    host: EMAIL_SMTP_HOSTNAME,
    port: Number(EMAIL_PORT),
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  },
  {}
);

(async () => {
  await verifyConnection();
})();

export async function sendEmail(emailOptions: SendMailOptions) {
  const result = await transporter.sendMail(emailOptions);

  return result;
}

async function verifyConnection() {
  try {
    console.log("EMAIL SERVICE: testing connection");
    const result = await transporter.verify();
    console.log("EMAIL SERVICE: works fine");
  } catch (error) {
    console.error(error);
  }
}
