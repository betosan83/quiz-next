import { useEffect, useState } from 'react'
import Survey from '../components/Survey'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

const testQuestion = new QuestionModel(1, 'Testing', 'test', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.right('Black'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState(testQuestion)

  async function loadQuestionsIds() {
      const resp = await fetch(`${BASE_URL}/survey`)
      const questionsIds = await resp.json()
      setQuestionsIds(questionsIds)
  }
  async function loadQuestion(questionsId: number) {
      const resp = await fetch(`${BASE_URL}/questions/${questionsId}`)
      // Json represent the QuestionModel object.
      // Now the goal is to transform it into an QuestionModel object.
      const questionJson = await resp.json()
      console.log(questionJson)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function questionAnswered(question: QuestionModel) {

  }
  function goToNextQuestion() {

  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Survey 
        question={question}
        last={true}
        questionAnswered={questionAnswered}
        goToNextQuestion={goToNextQuestion}
      />
        
    </div>
  )
}
