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
    new QuestionModel(7, 'Que signifie :', '"Être à la bourre"', [
        AnswerModel.wrong('Être en avance'),
        AnswerModel.wrong('Être à l’heure'),
        AnswerModel.wrong('Être saoul'),
        AnswerModel.right('Être en retard'),
    ]),
    new QuestionModel(8, 'Que signifie :', '“Être radin”', [
        AnswerModel.wrong('Être généreux'),
        AnswerModel.wrong('Être chanceux'),
        AnswerModel.wrong('Être méchant'),
        AnswerModel.right('Être avare'),
    ]),
    new QuestionModel(9, 'Quelle expression n’a pas le même sens que', '“Avoir la banane”', [
        AnswerModel.wrong('Avoir la patate'),
        AnswerModel.wrong('Avoir la frite'),
        AnswerModel.wrong('Avoir la pêche'),
        AnswerModel.right('Avoir la main verte'),
    ]),
    new QuestionModel(10, 'Que signifie l’expression :', '“Il n’y a pas un chat”', [
        AnswerModel.wrong('Il n’y a rien à manger.'),
        AnswerModel.wrong('Il n’y a rien à faire.'),
        AnswerModel.wrong(' Il n’y a rien à voir.'),
        AnswerModel.right('Il n’y a personne.'),
    ]),
    new QuestionModel(11, 'Quelle expression n’a pas le même sens que', '“J’en ai marre”', [
        AnswerModel.wrong('J’en ai ras-le-bol'),
        AnswerModel.wrong('J’en ai ma claque'),
        AnswerModel.wrong('J’en ai assez'),
        AnswerModel.right('J’en ai trop'),
    ]),
    new QuestionModel(12, 'Quelle est la bonne réponse ?', '“Il faut que je … le gâteau au four. ”', [
        AnswerModel.wrong('mets'),
        AnswerModel.wrong('met'),
        AnswerModel.wrong('mettes'),
        AnswerModel.right('mette'),
    ]),
    new QuestionModel(13, 'Quelle est la bonne réponse ?', '“J’espère que tu … à l’heure demain”', [
        AnswerModel.wrong('soit'),
        AnswerModel.wrong('es'),
        AnswerModel.wrong('sois'),
        AnswerModel.right('seras'),
    ]),
    new QuestionModel(14, 'Quelle est la bonne réponse ?', '“Je suis contente que tu … à la fac.”', [
        AnswerModel.wrong('va'),
        AnswerModel.wrong('iras'),
        AnswerModel.wrong('vas'),
        AnswerModel.right('ailles'),
    ]),
    new QuestionModel(15, 'Quelle est la bonne réponse ?', '“Elle pense que vous … tort”', [
        AnswerModel.wrong('ayez'),
        AnswerModel.wrong('alliez'),
        AnswerModel.wrong('allez'),
        AnswerModel.right('avez'),
    ]),
    new QuestionModel(16, 'Quelle est la bonne réponse ?', '“Il est peu probable qu’il … chanter.”', [
        AnswerModel.wrong('sait'),
        AnswerModel.wrong('sera'),
        AnswerModel.wrong('save'),
        AnswerModel.right('sache'),
    ]),
    new QuestionModel(17, 'Quelle est la bonne réponse ?', '“Elle fait une sieste après que son fils … mangé.”', [
        AnswerModel.wrong('aie'),
        AnswerModel.wrong('ait'),
        AnswerModel.wrong('est'),
        AnswerModel.right('a'),
    ]),
    new QuestionModel(18, 'Quelle est la bonne réponse ?', '“Je me doute bien que tu … la réponse”', [
        AnswerModel.wrong('connaisse'),
        AnswerModel.wrong('connait'),
        AnswerModel.wrong('connaisses'),
        AnswerModel.right('connais'),
    ]),
  
]

export default questions