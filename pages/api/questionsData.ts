import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(12, 'Quelle est la bonne réponse ?', '“Il faut que je … le gâteau au four. ”', [
        AnswerModel.wrong('mets'),
        AnswerModel.wrong('met'),
        AnswerModel.wrong('mettes'),
        AnswerModel.right('mette'),
    ]),
    new QuestionModel(13, 'Quelle est la bonne réponse ?', '“J’espère que tu … à l’heure demain.”', [
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
    new QuestionModel(15, 'Quelle est la bonne réponse ?', '“Elle pense que vous … tort.”', [
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
    new QuestionModel(19, 'Quelle est la bonne réponse ?', '“Pourvu que nous n’... pas trop tard!”', [
        AnswerModel.wrong('arriverons'),
        AnswerModel.wrong('arrions'),
        AnswerModel.wrong('arrivons'),
        AnswerModel.right('arrivions'),
    ]),
    new QuestionModel(20, 'Quelle est la bonne réponse ?', '“Tu feras des exercices jusqu’à ce que tu ... ta leçon.”', [
        AnswerModel.wrong('compris'),
        AnswerModel.wrong('comprenent'),
        AnswerModel.wrong('comprends'),
        AnswerModel.right('comprennes'),
    ]),
    new QuestionModel(21, 'Quelle est la bonne réponse ?', '“J’ai acheté de la farine pour que vous ... faire un gâteau.”', [
        AnswerModel.wrong('pourriez'),
        AnswerModel.wrong('pussiez'),
        AnswerModel.wrong('pouvez'),
        AnswerModel.right('puissiez'),
    ]),
    new QuestionModel(22, 'Quelle est la bonne réponse ?', '“Il est possible que le rendez-vous ... annulé.”', [
        AnswerModel.wrong('sois'),
        AnswerModel.wrong('fusse'),
        AnswerModel.wrong('soyez'),
        AnswerModel.right('soit'),
    ]),
    new QuestionModel(23, 'Quelle est la bonne réponse ?', '“J’ai peur que vous ne ... des bêtises si la baby-sitter ne vient pas ce soir.”', [
        AnswerModel.wrong('faisiez'),
        AnswerModel.wrong('fusse'),
        AnswerModel.wrong('fissiez'),
        AnswerModel.right('fassiez'),
    ]),
    new QuestionModel(24, 'Quelle est la bonne réponse ?', '“Nous aimerions que les jumeaux ... le même cadeau pour leur anniversaire.”', [
        AnswerModel.wrong('avaient'),
        AnswerModel.wrong('ait'),
        AnswerModel.wrong('auront'),
        AnswerModel.right('aient'),
    ]),
    new QuestionModel(25, 'Quelle est la bonne réponse ?', '“Tu avais si faim! Je suis surprise que tu ne ... pas tout.”', [
        AnswerModel.wrong('mange'),
        AnswerModel.wrong('mangeas'),
        AnswerModel.wrong('mangeasses'),
        AnswerModel.right('manges'),
    ]),
    new QuestionModel(26, 'Quelle est la bonne réponse ?', '“Nous nous levons si tard le matin qu’il arrive que nous ... le petit-déjeuner.”', [
        AnswerModel.wrong('manquisions'),
        AnswerModel.wrong('manquerons'),
        AnswerModel.wrong('manquons'),
        AnswerModel.right('manquions'),
    ]),
    new QuestionModel(27, 'Quelle est la bonne réponse ?', '“Je ne pense pas que nous ... au cinéma ce soir.”', [
        AnswerModel.wrong('allerons'),
        AnswerModel.wrong('irons'),
        AnswerModel.wrong('allons'),
        AnswerModel.right('allions'),
    ]),
    new QuestionModel(28, 'Quelle est la bonne réponse ?', '“David espère qu’il ... aller à la fête chez son ami.”', [
        AnswerModel.wrong('pusses'),
        AnswerModel.wrong('pu'),
        AnswerModel.wrong('puisse'),
        AnswerModel.right('pourra'),
    ]),
    new QuestionModel(29, 'Quelle est la bonne réponse ?', '“Je préfère que tu ... déjà à 8 heures.”', [
        AnswerModel.wrong('venu'),
        AnswerModel.wrong('venais'),
        AnswerModel.wrong('viens'),
        AnswerModel.right('viennes'),
    ]),
    new QuestionModel(30, 'Quelle est la bonne réponse ?', '“Vous avez décidé que vous ... en vacances en France.”', [
        AnswerModel.wrong('partira'),
        AnswerModel.wrong('partez'),
        AnswerModel.wrong('partiez'),
        AnswerModel.right('partirez'),
    ]),
    new QuestionModel(31, 'Quelle est la bonne réponse ?', '“Ce chat adore qu’on lui ... des câlins.”', [
        AnswerModel.wrong('fisse'),
        AnswerModel.wrong('fasses'),
        AnswerModel.wrong('fait'),
        AnswerModel.right('fasse'),
    ]),
    new QuestionModel(32, 'Quelle est la bonne réponse ?', '“Bien que nous ... vite., il faudra encore trois semaines pour tout régler.”', [
        AnswerModel.wrong('travaillassions'),
        AnswerModel.wrong('travaillerons'),
        AnswerModel.wrong('travaillons'),
        AnswerModel.right('travaillions'),
    ]),
    new QuestionModel(33, 'Quelle est la bonne réponse ?', '“Il faut que nous ... des économies.”', [
        AnswerModel.wrong('fattons'),
        AnswerModel.wrong('faision'),
        AnswerModel.wrong('fasions'),
        AnswerModel.right('fassions'),
    ]),
    new QuestionModel(34, 'Quelle est la bonne réponse ?', '“Je doute qu’ils ... raison.”', [
        AnswerModel.wrong('avaients'),
        AnswerModel.wrong('ont'),
        AnswerModel.wrong('avaient'),
        AnswerModel.right('aient'),
    ]),
  

    
]

export default questions