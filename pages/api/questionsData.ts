import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Quelle est votre mot préféré ?', '', [
        AnswerModel.wrong('Heureux'),
        AnswerModel.wrong('Cauchemare'),
        AnswerModel.wrong('Bonjour'),
        AnswerModel.right('Cerveaux'),
    ]),
    new QuestionModel(2, 'Quelle est votre pays préféré ?', '', [
        AnswerModel.wrong('Brésil'),
        AnswerModel.wrong('Italie'),
        AnswerModel.wrong('États-Unis'),
        AnswerModel.right('France'),
    ]),
    new QuestionModel(3, 'Comment faut-il écrire le participe passé ?', 'Les pommes qu’elle a … sont trop mûres.', [
        AnswerModel.wrong('acheté'),
        AnswerModel.wrong('achetée'),
        AnswerModel.wrong('achetés'),
        AnswerModel.right('achetées'),
    ]),
    new QuestionModel(4, 'Quel nombre est mal écrit ?', '', [
        AnswerModel.wrong('sept cents millions'),
        AnswerModel.wrong('Six mille un'),
        AnswerModel.wrong('Huit cent vingt'),
        AnswerModel.right('Quatre-vingts-sept'),
    ]),
    new QuestionModel(5, 'Complétez la phrase', 'Je vous … ce paquet de la part de Sophie.', [
        AnswerModel.wrong('emmène'),
        AnswerModel.wrong('amène'),
        AnswerModel.wrong('emporte'),
        AnswerModel.right('apporte'),
    ]),
    new QuestionModel(6, 'Dans quelle région se trouve le Mont Saint-Michel ?', '', [
        AnswerModel.wrong('En Bretagne'),
        AnswerModel.wrong('Dans les Pays de La Loire'),
        AnswerModel.wrong('En Île de France '),
        AnswerModel.right('En Normandie'),
    ]),
]

export default questions