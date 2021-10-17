import { useState } from 'react'
import Button from '../components/Button'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

const testQuestion = new QuestionModel(1, 'Testing', 'test', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.right('Black'),
])

export default function Home() {
  const [question, setQuestion] = useState(testQuestion)

  function onResponse(index: number) {
    setQuestion(question.answerWith(index))
  }
  function timeOut() {
    if (question.notAnswered) {
      setQuestion(question.answerWith(-1))
    }
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>

      <Question value={question}
          timeToAnswer={5}
          onResponse={onResponse} 
           timeOut={timeOut}/>
      <Button text={'Next'} href="/result"/>
    </div>
  )
}
