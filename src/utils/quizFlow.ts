import { QuestionOption, AnswerOption } from "../components/quiz-questions/questionSet";

// determine which question object to display based on previous quiz choice
export const getQuestionToShow = (
  currentQuestion: number,
  showingFollowUp: boolean,
  userAnswers: string[],
  mainQuestions: QuestionOption[],
  followUpQuestions: QuestionOption[]
): QuestionOption => {

  if (currentQuestion === 1 && !showingFollowUp) {
    const firstUserAnswer = userAnswers[0];

    if (firstUserAnswer === "Tackling daily life") return followUpQuestions[0];
    if (firstUserAnswer === "Getting work done") return followUpQuestions[1];
    if (firstUserAnswer === "Off-road adventures") return followUpQuestions[2];
    if (firstUserAnswer === "Pure driving enjoyment") return followUpQuestions[3];
  }

  // default fallback 
  return mainQuestions[currentQuestion];
}