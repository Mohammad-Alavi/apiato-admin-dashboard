export default class FaqGroup {
  constructor (
    object = null,
    id = null,
    name = '',
    labelEn = '',
    labelDe = '',
    order = null
  ) {
    this.object = object
    this.id = id
    this.name = name
    this.label_en = labelEn
    this.label_de = labelDe
    this.order = order
  }

  static fromJson (json) {
    return new FaqGroup(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de,
      json.order
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
}
