import quizzes from "../assets/quizzes/quizCollection"
import Card from "./Card"

export default function Quizzes() {
  return (
    <div className="quiz-card-container">
      {
        quizzes.map((quiz) => {
          return <Card key={quiz.title} title={quiz.title} data={quiz.data} />
        })
      }
    </div>
  )
}
