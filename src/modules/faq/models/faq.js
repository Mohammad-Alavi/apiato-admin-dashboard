export default class Faq {
  constructor (
    id = null,
    questionEn = '',
    questionEe = '',
    answerEn = '',
    answerEe = '',
    order = null
  ) {
    this.id = id
    this.question_en = questionEn
    this.question_de = questionEe
    this.answer_en = answerEn
    this.answer_de = answerEe
    this.order = order
  }

  static fromJson (json) {
    return new Faq(
      json.id,
      json.question_en,
      json.question_de,
      json.answer_en,
      json.answer_de,
      json.order
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(faq => {
      result.push(this.fromJson(faq))
    }
    )
    return result
  }
}
