import Taxonomy from '@/modules/taxonomy/models/taxonomy'
import Category from '@/modules/taxonomy/models/category'

export default class Specialization extends Taxonomy {
  constructor (
    object = null,
    id = null,
    labelEn = null,
    labelDe = null,
    categoryNames = '',
    categoryIDs = null,
    categories = null
  ) {
    super(
      object,
      id,
      labelEn,
      labelDe
    )
    this.category_names = categoryNames
    this.category_ids = categoryIDs
    this.categories = categories
  }

  static fromJson (json) {
    return new Specialization(
      json.object,
      json.id,
      json.label_en,
      json.label_de,
      Specialization.getCategoryNames(json),
      json.category_ids,
      json.categories ? Category.fromJsonArray(json.categories.data) : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(specialization => {
      result.push(this.fromJson(specialization))
    }
    )
    return result
  }

  static getCategoryNames (json) {
    const categoryNames = []
    if (json.categories?.data.length > 0) {
      json.categories.data.forEach(category => {
        categoryNames.push(category.label_en)
      })
    }
    return categoryNames.join(', ')
  }
}
