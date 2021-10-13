import { shuffle } from '../../../functions/arrays'
import questions from '../questionsData'

export default function survey(req, res) {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}