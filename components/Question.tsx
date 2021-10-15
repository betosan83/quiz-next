import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Title from "./Title";

const letters = [
    { value: 'A', collor: '#F2C866'},
    { value: 'B', collor: '#F266BA'},
    { value: 'C', collor: '#85D4F2'},
    { value: 'D', collor: '#BCE596'}
]

interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return  (
            <Answer key={i}
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
            {renderAnswers()}
        </div>
    )
}