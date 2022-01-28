import { createTransport } from "nodemailer";
import {
  EMAIL_SMTP_HOSTNAME,
  EMAIL_PORT,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_ADDRESS,
} from "#environment/vars";

import type { SendMailOptions } from "nodemailer";

const transporter = createTransport(
  {
    host: EMAIL_SMTP_HOSTNAME,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  },
  {
    from: EMAIL_ADDRESS
  }
);

// (async () => {
//   await verifyConnection();
// })();

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
