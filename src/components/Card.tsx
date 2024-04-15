import { Link } from "react-router-dom";

type QnA = {
  q: string,
  a: string
}

interface Props {
  title: string,
  data: QnA[]
}

export default function Card({ title, data }: Props) {
  const questionAmount = data.length;

  return (
    <Link to={`/quizzes/${title.toLowerCase()}`} className="quiz-card">
      <h2 className="quiz-card-title">{title}</h2>
      <h3 className="quiz-card-subtitle">{questionAmount} question{questionAmount > 1 ? 's' : null}</h3>
    </Link>
  )
}
