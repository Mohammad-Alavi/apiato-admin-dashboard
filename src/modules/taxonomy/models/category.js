import Taxonomy from '@/modules/taxonomy/models/taxonomy'
import Specialization from '@/modules/taxonomy/models/specialization'

export default class Category extends Taxonomy {
  constructor (
    object = null,
    id = null,
    labelEn = null,
    labelDe = null,
    specializationIDs = null,
    specializations = null
  ) {
    super(
      object,
      id,
      labelEn,
      labelDe
    )
    this.specialization_ids = specializationIDs
    this.specializations = specializations
  }

  static fromJson (json) {
    return new Category(
      json.object,
      json.id,
      json.label_en,
      json.label_de,
      json.specialization_ids,
      json.specializations ? Specialization.fromJsonArray(json.specializations.data) : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(category => {
      result.push(this.fromJson(category))
    }
    )
    return result
  }
}
