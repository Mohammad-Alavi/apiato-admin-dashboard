import Role from '@/modules/users/models/role'

export default class FaqGroup {
  constructor (
    object = null,
    id = null,
    name = '',
    labelEn = '',
    labelDe = '',
    order = null,
    faqs = [],
    faqCount = null
  ) {
    this.object = object
    this.id = id
    this.name = name
    this.label_en = labelEn
    this.label_de = labelDe
    this.order = order
    this.faqs = faqs
    this.faq_count = faqCount
  }

  static fromJson (json) {
    return new FaqGroup(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de,
      json.order,
      json.faqs?.data.length > 0 ? Role.fromJsonArray(json.faqs.data) : [],
      FaqGroup.getFaqCount(json)
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(faqGroup => {
      result.push(this.fromJson(faqGroup))
    }
    )
    return result
  }

  static getFaqCount (json) {
    return json.faqs?.data.length ?? 0
  }
}
