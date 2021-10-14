import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Title from "./Title";

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return  (
            <Answer key={i}
                value={answer}
                index={i}
                letter="A"
                backgroundLetterCollor="#F2C866"
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