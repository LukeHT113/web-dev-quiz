import { useEffect, useState } from "react"
import quizzes from "../assets/quizzes/quizCollection"
import { Link, useParams } from "react-router-dom";
import { TiThumbsUp, TiThumbsDown, TiMediaFastForwardOutline } from "react-icons/ti";
import { GiGlassCelebration } from "react-icons/gi";
import { MdOutlineReplay } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

type QnA = {
  q: string,
  a: string
}

type quiz = {
  title: string,
  data: QnA[]
}

export default function Quiz() {

  const [quizData, setQuizData] = useState<quiz | null>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizOver, setQuizOver] = useState<boolean>(false);
  const [knownQuestions, setKnownQuestions] = useState<number>(0);
  const [unknownQuestions, setUnknownQuestions] = useState<number>(0);
  const [skippedQuestions, setSkippedQuestions] = useState<number>(0);
  const [answerOpen, setAnswerOpen] = useState<boolean>(false);

  function getQuiz(quizTitle: string | undefined): quiz | null {
    if (!quizTitle) {
      return null;
    }
    for (let index = 0; index < quizzes.length; index++) {
      const quiz = quizzes[index];
      if (quiz.title.toUpperCase() === quizTitle.toUpperCase()) {
        return quiz;
      }
    }
    return null;
  }

  function nextQuestion() {
    if (currentQuestion + 1 == quizData?.data.length) {
      endQuiz();
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  }

  function knewQuestion() {
    setKnownQuestions(prev => prev + 1);
    if (answerOpen) {
      setAnswerOpen(false);
      setTimeout(() => {
        nextQuestion();
      }, 300)
      return
    }
    nextQuestion();
  }

  function notKnewQuestion() {
    setUnknownQuestions(prev => prev + 1);
    if (answerOpen) {
      setAnswerOpen(false);
      setTimeout(() => {
        nextQuestion();
      }, 300)
      return
    }
    nextQuestion();
  }

  function skipQuestion() {
    setSkippedQuestions(prev => prev + 1);
    if (answerOpen) {
      setAnswerOpen(false);
      setTimeout(() => {
        nextQuestion();
      }, 300)
      return
    }
    nextQuestion();
  }

  function endQuiz() {
    setQuizOver(true);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setKnownQuestions(0);
    setUnknownQuestions(0);
    setSkippedQuestions(0);
    setAnswerOpen(false);
    setQuizOver(false);
    setQuizData(prev => {
      if (prev) {
        return ({title: prev.title, data: shuffle(prev.data)})
      }
    })
  }

  const { quizId } = useParams();

  function shuffle(array: QnA[]) {
    let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array
  }

  useEffect(() => {
    const quiz = getQuiz(quizId);
    if (quiz) {
    quiz.data = shuffle(quiz.data);
    }
    setQuizData(quiz);
  }, [quizId])
  

  return (
    <>
    {
      quizData ? 
      <section className="quiz-container">
        <Link className="quiz-home" to='/'><FaLongArrowAltLeft className="icon" />Back to quizzes</Link>
        <h1 className="quiz-title">{quizData.title}</h1>
        <div className="quiz-progress-container">
          <div className="quiz-progress-bar-container">
            <div className="quiz-progress-bar">
              <div className="bar" style={{width: `${((knownQuestions + unknownQuestions + skippedQuestions) / quizData.data.length) * 100}%` }}></div>
            </div>
            <small>{knownQuestions + unknownQuestions + skippedQuestions} / {quizData.data.length}</small>
          </div>
          <div className="quiz-meta-data">
            <p className="quiz-meta-container"><TiThumbsUp className="icon" />Correct: <span>{knownQuestions}</span></p>
            <p className="quiz-meta-container"><TiThumbsDown className="icon" />Incorrect: <span>{unknownQuestions}</span></p>
            <p className="quiz-meta-container"><TiMediaFastForwardOutline className="icon" />Skipped: <span>{skippedQuestions}</span></p>
            <button onClick={restartQuiz} className="quiz-meta-reset red"><MdOutlineReplay className="icon" />Reset</button>
          </div>
        </div>  
        {!quizOver ? 
        <div className="quiz-question-container">
          <div className={`quiz-answer-container ${answerOpen ? 'open' : ''}`}>
            <p className="quiz-answer-text">{quizData.data[currentQuestion].a}</p>
            <button className="quiz-reveal-btn" onClick={() => setAnswerOpen(prev => !prev)}>Hide Answer</button>
          </div>
          <h2 className="quiz-question">{quizData.data[currentQuestion].q}</h2>
          <button className="quiz-reveal-btn" onClick={() => setAnswerOpen(prev => !prev)}>Reveal Answer</button>
        </div>
        :
        <div className="quiz-finish-container">
          <div className="quiz-finish-icon"><GiGlassCelebration /></div>
          <h1 className="quiz-finish-heading">Quiz finished!</h1>
          <div className="quiz-results-container">
            <div className="quiz-result">
              <p>Correct: {knownQuestions}</p>
            </div>
            <div className="quiz-result">
              <p>Incorrect: {unknownQuestions}</p>
            </div>
            <div className="quiz-result">
              <p>Skipped: {skippedQuestions}</p>
            </div>
          </div>
          <button onClick={restartQuiz} className="quiz-restart-btn"><MdOutlineReplay className="icon" />Retake Quiz?</button>
        </div>}
        {!quizOver ? <div className="quiz-buttons-container">
          <button className="quiz-btn correct" onClick={knewQuestion}>Already Know That</button>
          <button className="quiz-btn incorrect" onClick={notKnewQuestion}>Didn't Know That</button>
          <button className="quiz-btn skip" onClick={skipQuestion}>Skip</button>
        </div> : null}
      </section>
      :
      <div className="error-container">
        <h1>ERROR: Could not find quiz</h1>
      </div>
    }
    </>
  )
}
