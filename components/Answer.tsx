import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnwserProps {
    value: AnswerModel
    index: number
    letter: string
    backgroundLetterCollor: string
    answerSelected: (index: number) => void
}

export default function Answer(props: AnwserProps) {
    const answer = props.value
    return (
        <div className={styles.answer}
        onClick={() => props.answerSelected(props.index)}>
            <div className={styles.answerContent}>
                <div className={styles.front}>
                    <div className={styles.letter}
                    style={{ backgroundColor: props.backgroundLetterCollor}}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>

                </div>
            </div>
        </div>
    )
}