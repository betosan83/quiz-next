import questionsData from '../questionsData'

export default function questions(req, res) {
    res.status(200).json(questionsData[0].toObject())
}