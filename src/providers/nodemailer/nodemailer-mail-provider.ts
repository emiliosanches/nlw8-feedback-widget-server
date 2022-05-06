import { MailProvider, SendMailData } from "../mail-provider";
import nodemailer from "nodemailer";

export class NodemailerMailProvider implements MailProvider {
  private transport;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  async sendMail({ subject, body }: SendMailData) {
    await this.transport.sendMail({
      from: "Equipe Feedget <feedback@feedget.com>",
      to: "Emilio Sanches <emiliosneto13@gmail.com>",
      subject,
      html: body,
    });
  }
}
