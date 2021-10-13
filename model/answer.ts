export default class AnswerModel {
    #value: string
    #rightAnswer: boolean
    #revealed: boolean

    constructor(value: string, rightAnswer: boolean, revealed = false) {
        this.#value = value
        this.#rightAnswer = rightAnswer
        this.#revealed = revealed
    }

    get value() {
        return this.#value
    }
    get rightAnswer() {
        return this.#rightAnswer
    }
    get revealed() {
        return this.#revealed
    }
}