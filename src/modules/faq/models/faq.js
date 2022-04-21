import Provider from '@/modules/provider/models/provider'

export default class Faq {
  constructor (
    id = null,
    questionEn = '',
    questionEe = '',
    answerEn = '',
    answerEe = '',
    order = null,
    faqGroup = null
  ) {
    this.id = id
    this.question_en = questionEn
    this.question_de = questionEe
    this.answer_en = answerEn
    this.answer_de = answerEe
    this.order = order
    this.faq_group = faqGroup
  }

  static fromJson (json) {
    return new Faq(
      json.id,
      json.question_en,
      json.question_de,
      json.answer_en,
      json.answer_de,
      json.order,
      json.faq_group ? Provider.fromJson(json.faq_group.data) : null
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
