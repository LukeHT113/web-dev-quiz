import { beginnerJs, intermediateJs, advancedJs } from './javascriptQuestions'

type QnA = {
  q: string,
  a: string
}

type quiz = {
  title: string,
  data: QnA[]
}

const quizzes: quiz[] = [
  {title: 'Beginner Javascript Questions', data: beginnerJs},
  {title: 'Intermediate Javascript Questions', data: intermediateJs},
  {title: 'Advanced Javascript Questions', data: advancedJs},
]

export default quizzes;