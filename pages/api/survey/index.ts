import { shuffle } from '../../../functions/arrays'
import questions from '../questionsData'

export default function survey(req, res) {
    const ids = questions.map(question => question.title)
    res.status(200).json(shuffle(ids))
}