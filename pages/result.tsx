import { useRouter } from "next/router"
import Button from "../components/Button"
import Summary from "../components/Summary"
import styles from '../styles/Result.module.css'

export default function Result() {
    const router = useRouter()
    const total = +router.query.total
    const rightQuestions = +router.query.rights
    const percent = Math.round((rightQuestions / total) * 100)
    return (
        <div className={styles.result}>
            <h1>Résumé</h1>
            <div style={{ display: 'flex' }}>
                <Summary text="Questions" value={total}/>
                <Summary text="Bonnes réponses" value={rightQuestions}
                backgroundColor="#9cd2a4"/>
                <Summary text="Résultat final" value={`${percent}%`}
                backgroundColor="#de6a33"/>
            </div>
            <Button href="/" text={"Réessayer"}/>
        </div>
    )
}