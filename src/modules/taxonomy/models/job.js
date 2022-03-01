import Taxonomy from '@/modules/taxonomy/models/taxonomy'

export default class Job extends Taxonomy {
  constructor (
    object = null,
    id = null,
    name = null,
    labelEn = null,
    labelDe = null
  ) {
    super(object,
      id,
      name,
      labelEn,
      labelDe)
  }

  static fromJson (json) {
    return new Job(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(job => {
      result.push(this.fromJson(job))
    }
    )
    return result
  }
}
