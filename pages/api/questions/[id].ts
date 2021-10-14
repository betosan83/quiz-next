import questionsData from '../questionsData'

export default function questions(req, res) {
    const selectedId = +req.query.id
    const oneOrNothing = questionsData.filter(question => question.id === selectedId)
    
    if (oneOrNothing.length === 1) {
        const selectedQuestion = oneOrNothing[0].shuffleAnswers()
        const obj = selectedQuestion.awswerWith(0).toObject()
        res.status(200).json(obj)
    } else {
        res.status(204).send()
    }
    
}