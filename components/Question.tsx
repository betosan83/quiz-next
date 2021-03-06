import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Subtitle from "./Subtitle";
import Timer from "./Timer";
import Title from "./Title";

const letters = [
    { value: 'A', collor: '#F2C866'},
    { value: 'B', collor: '#F266BA'},
    { value: 'C', collor: '#85D4F2'},
    { value: 'D', collor: '#BCE596'}
]

interface QuestionProps {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeOut: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return  (
            <Answer key={`${question.id}-${i}`}
                value={answer}
                index={i}
                letter={letters[i].value}
                backgroundLetterCollor={letters[i].collor}
                onResponse={props.onResponse}
            />
            )
        })
    }

    return (
        <div className={styles.question}>
            <Title text={question.title}/>
            <Subtitle text={question.subtitle}/>
            <Timer key={question.id} duration={props.timeToAnswer ?? 10} timeOut={props.timeOut}/>
            {renderAnswers()}
        </div>
    )
}