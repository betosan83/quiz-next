import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #answers: AnswerModel[]
    #rightAnswer: boolean
    //#answered

    constructor(id: number, title: string, answers: AnswerModel[], rightAnswer: boolean) {
        this.#id = id
        this.#title = title
        this.#answers = answers
        this.#rightAnswer = rightAnswer
    }

    get id() {
        return this.#id
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

}