export default class Taxonomy {
  constructor (
    object = null,
    id = null,
    labelEn = null,
    labelDe = null
  ) {
    this.object = object
    this.id = id
    this.label_en = labelEn
    this.label_de = labelDe
  }

  static fromJson (json) {
    return new Taxonomy(
      json.object,
      json.id,
      json.label_en,
      json.label_de
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(taxonomy => {
      result.push(this.fromJson(taxonomy))
    })
    return result
  }
}
