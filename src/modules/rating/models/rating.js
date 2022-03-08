import dayjs from 'dayjs'

export default class Rating {
  constructor (
    object = null,
    id = '',
    score = null,
    text = null,
    createdAt = null
  ) {
    this.object = object
    this.id = id
    this.score = score
    this.text = text
    this.created_at = createdAt
  }

  static fromJson (json) {
    return new Rating(
      json.object,
      json.id,
      json.score,
      json.text,
      dayjs(json.created_at).format('YYYY-MM-DD')
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(rating => {
      result.push(this.fromJson(rating))
    }
    )
    return result
  }
}
