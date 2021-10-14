import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

const testQuestion = new QuestionModel(1, 'Testing', 'test', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.right('Black')
], false)

export default function Home() {
  const [question, setQuestion] = useState(testQuestion)

  function answerSelected(index: number) {
    console.log(index)
    setQuestion(question.awswerWith(index))
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>

      <Question value={testQuestion} answerSelected={answerSelected}/>

    </div>
  )
}
