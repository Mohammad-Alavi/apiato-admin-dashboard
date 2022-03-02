import Taxonomy from '@/modules/taxonomy/models/taxonomy'
import Category from '@/modules/taxonomy/models/category'

export default class Job extends Taxonomy {
  constructor (
    object = null,
    id = null,
    name = null,
    labelEn = null,
    labelDe = null,
    taxonomyId = null,
    category = null
  ) {
    super(object,
      id,
      name,
      labelEn,
      labelDe,
      taxonomyId
    )
    this.category = category
  }

  static fromJson (json) {
    return new Job(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de,
      json.taxonomy_id,
      Category.fromJson(json.category.data)
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
