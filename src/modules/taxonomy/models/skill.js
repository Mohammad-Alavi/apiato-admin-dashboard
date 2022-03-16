import Taxonomy from '@/modules/taxonomy/models/taxonomy'
import Job from '@/modules/taxonomy/models/job'
import Sport from '@/modules/taxonomy/models/sport'

export default class Skill extends Taxonomy {
  constructor (
    object = null,
    id = null,
    name = null,
    labelEn = null,
    labelDe = null,
    taxonomyId = null,
    sport = null,
    job = null
  ) {
    super(object,
      id,
      name,
      labelEn,
      labelDe,
      taxonomyId
    )
    this.sport = sport
    this.job = job
  }

  static fromJson (json) {
    return new Skill(
      json.object,
      json.id,
      json.name,
      json.label_en,
      json.label_de,
      json.taxonomy_id,
      json.sport ? Sport.fromJson(json.sport.data) : null,
      json.job ? Job.fromJson(json.job.data) : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(skill => {
      result.push(this.fromJson(skill))
    }
    )
    return result
  }
}
