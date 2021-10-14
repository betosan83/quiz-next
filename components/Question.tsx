import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Title from "./Title";

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props) {
    const question = props.value

    return (
        <div className={styles.question}>
            <Title text={question.title}/>
        </div>
    )
}