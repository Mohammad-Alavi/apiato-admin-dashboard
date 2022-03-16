import Taxonomy from '@/modules/taxonomy/models/taxonomy'

export default class Sport extends Taxonomy {
  constructor (
    object = null,
    id = null,
    name = null,
    labelEn = null,
    labelDe = null,
    taxonomyId = null
  ) {
    super(object,
      id,
      name,
      labelEn,
      labelDe,
      taxonomyId
    )
  }

  static fromJson (json) {
    return new Sport(
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
    json.forEach(sport => {
      result.push(this.fromJson(sport))
    }
    )
    return result
  }
}
