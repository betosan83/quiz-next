import QuestionModel from "../model/question";
import styles from '../styles/Survey.module.css'
import Button from "./Button";
import Question from "./Question";

interface SurveyProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    goToNextStep: () => void
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
                    timeOut={props.goToNextStep} />
                : false
            }
            <Button onClick={props.goToNextStep}
                text={props.last ? 'Terminer' : 'Suivant'}/>
        </div>
    )
}