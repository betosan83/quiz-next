import styles from '../styles/Subtitle.module.css'

interface SubtitleProps {
    text: string
}

export default function Subtitle(props: SubtitleProps) {
    return (
        <div className={styles.subtitle}>
            <span className={styles.text}>
                {props.text}
            </span>

        </div>
    )

}