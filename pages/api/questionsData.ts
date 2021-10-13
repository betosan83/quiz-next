import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Quelle est votre mot préféré ?', [
        AnswerModel.wrong('Heureux'),
        AnswerModel.wrong('Cauchemare'),
        AnswerModel.wrong('Bonjour'),
        AnswerModel.right('Cerveaux')
    ], false)
]

export default questions