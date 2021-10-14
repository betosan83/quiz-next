import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnwserProps {
    value: AnswerModel
    index: number
    letter: string
    letterCollor: string
}

export default function Answer(props: AnwserProps) {

    return (
        <div className={styles.answer}>
            <div className={styles.answerContent}>
                <div className={styles.front}>
                    <div className={styles.letter}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {props.value}
                    </div>
                </div>
                <div className={styles.back}>

                </div>
            </div>
        </div>
    )
}