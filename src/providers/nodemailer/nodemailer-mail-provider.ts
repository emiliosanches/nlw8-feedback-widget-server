import { MailProvider, SendMailData } from "../mail-provider";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4fd52760f57a00",
    pass: "118ea99f899de9",
  },
});

export class NodemailerMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <feedback@feedget.com>",
      to: "Emilio Sanches <emiliosneto13@gmail.com>",
      subject,
      html: body
    });
  }
}
