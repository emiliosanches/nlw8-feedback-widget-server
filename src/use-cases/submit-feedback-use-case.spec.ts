import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "A bug occurred!",
        screenshot: "data:image/png;base64,2353253252",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "A bug occurred!",
        screenshot: "data:image/png;base64,2353253252",
      })
    ).rejects.toThrow();
  });

   it("should not be able to submit a feedback without a comment", async () => {
     await expect(
       submitFeedbackUseCase.execute({
         type: "BUG",
         comment: "",
         screenshot: "data:image/png;base64,2353253252",
       })
     ).rejects.toThrow();
   });

   it("should not be able to submit a feedback with an invalid screenshot", async () => {
     await expect(
       submitFeedbackUseCase.execute({
         type: "BUG",
         comment: "Comment test",
         screenshot: "xxx",
       })
     ).rejects.toThrow();
   });
});
