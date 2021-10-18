import styles from '../styles/Summary.module.css'

interface SummaryProps {
    value: any
    text: string
    backgroundColor?: string
    fontColor?: string
}

export default function Summary(props: SummaryProps) {

    return (
        <div className={styles.summary}>
            <div className={styles.value} style={{
                backgroundColor: props.backgroundColor ?? '#fdd60f',
                color: props.fontColor ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )

}