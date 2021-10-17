import { useState } from 'react'
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
  const [question, setQuestion] = useState(testQuestion)

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
