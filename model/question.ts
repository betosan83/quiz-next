import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #subtitle: string
    #answers: AnswerModel[]
    #right: boolean
    //#answered

    constructor(id: number, title: string, subtitle: string, answers: AnswerModel[], right = false) {
        this.#id = id
        this.#title = title
        this.#subtitle = subtitle
        this.#answers = answers
        this.#right = right
    }

    get id() {
        return this.#id
    }
    get subtitle() {
        return this.#subtitle
    }
    get title() {
        return this.#title
    }
    get answers() {
        return this.#answers
    }
    get right() {
        return this.#right
    }

    get notAnswered() {
        return !this.answered
    }

    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) {
                return true
            }
        }
        return false
    }

    answerWith(index: number): QuestionModel {
        const hitRight = this.#answers[index]?.rightAnswer
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = index === i
            const mustReveal = selectedAnswer || answer.rightAnswer
            return mustReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.id, this.title, this.subtitle, answers, hitRight)
    }

    revealAnswers() {
        const answers = this.#answers.map(answer => {
            return answer.reveal()
        })
        return new QuestionModel(this.id, this.title, this.subtitle, answers, false)
    }

    shuffleAnswers(): QuestionModel {
        let shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#title, this.#subtitle, shuffledAnswers, this.#right)
    }

    static createUsingObject(obj: QuestionModel) : QuestionModel {
        const answers = obj.answers.map(ans => AnswerModel.createUsingObject(ans))
        return new QuestionModel(obj.id, obj.title, obj.subtitle, answers, obj.right)
    }

    toObject() {
        return {
            id: this.#id,
            title: this.#title,
            subtitle: this.#subtitle,
            answered: this.answered,
            right: this.#right,
            answers: this.#answers.map(ans => ans.toObject())
        }
    }
}