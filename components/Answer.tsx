import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    backgroundLetterCollor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    const answerRevealed = answer.revealed ? styles.answerRevealed : ''
    return (
        <div className={styles.answer}
            onClick={() => props.onResponse(props.index)}>
            <div className={`${answerRevealed} ${styles.answerContent}`}>
                <div className={styles.front}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.backgroundLetterCollor }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>
                    {answer.rightAnswer ? (
                        <div className={styles.right}>
                            <div>La bonne réponse est...</div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    ) : (
                        <div className={styles.wrong}>
                            <div>Cette réponse est incorrecte !</div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}