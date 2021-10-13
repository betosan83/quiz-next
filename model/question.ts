import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #subtitle: string
    #answers: AnswerModel[]
    #rightAnswer: boolean
    //#answered

    constructor(id: number, title: string, subtitle: string, answers: AnswerModel[], rightAnswer: boolean) {
        this.#id = id
        this.#title = title
        this.#answers = answers
        this.#rightAnswer = rightAnswer
        this.#subtitle = subtitle
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
    get rightAnswer() {
        return this.#rightAnswer
    }

    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }
        return false
    }

    shuffleAnswers(): QuestionModel {
        let shuffledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#title, this.#subtitle, shuffledAnswers, this.#rightAnswer)
    }

    toObject() {
        return {
            id: this.#id,
            title: this.#title,
            subtitle: this.#subtitle,
            answers: this.#answers.map(resp => resp.toObject()),
            rightAnswer: this.#rightAnswer
        }
    }
}