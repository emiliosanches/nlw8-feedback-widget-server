import { MailProvider } from "../providers/mail-provider";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailProvider: MailProvider
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type)
      throw new Error('Type is required.');
  
    if (!comment)
      throw new Error('Comment is required.')

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error('Invalid screenshot format.')
    }
    
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailProvider.sendMail({
      subject: "Novo feedback recebido: " + type,
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img style="max-width: 100%; max-height: 700px;" src="${screenshot}" />` : '',
        `</div>`,
      ].join("\n"),
    });
  }
}