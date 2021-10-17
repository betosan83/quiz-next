import QuestionModel from "../model/question";
import styles from '../styles/Survey.module.css'
import Button from "./Button";
import Question from "./Question";

interface SurveyProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    goToNextQuestion: () => void
}

export default function Survey(props: SurveyProps) {

    function onResponse(index: number) {
        if (props.question.notAnswered) {
            props.questionAnswered(props.question.answerWith(index))
        }
    }

    return (
        <div className={styles.survey}>
            {props.question ? 
                <Question
                    value={props.question}
                    timeToAnswer={6}
                    onResponse={onResponse}
                    timeOut={props.goToNextQuestion} />
                : false
            }
            <Button onClick={props.goToNextQuestion}
                text={props.last ? 'Finish' : 'Next'}/>
        </div>
    )
}