export default class AnswerModel {
    #value: string
    #rightAnswer: boolean
    #revealed: boolean

    constructor(value: string, rightAnswer: boolean, revealed = false) {
        this.#value = value
        this.#rightAnswer = rightAnswer
        this.#revealed = revealed
    }

    static right(value: string) {
        return new AnswerModel(value, true)
    }
    static wrong(value: string) {
        return new AnswerModel(value, false)
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