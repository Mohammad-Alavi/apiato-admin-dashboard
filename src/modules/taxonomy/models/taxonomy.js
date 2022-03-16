export default class Taxonomy {
  constructor (
    object = null,
    id = null,
    name = null,
    labelEn = null,
    labelDe = null,
    taxonomyId = null
  ) {
    this.object = object
    this.id = id
    this.name = name
    this.label_en = labelEn
    this.label_de = labelDe
    this.taxonomy_id = taxonomyId
  }

  static fromJson (json) {
    return new Taxonomy(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de,
      json.taxonomy_id
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(taxonomy => {
      result.push(this.fromJson(taxonomy))
    }
    )
    return result
  }
}
