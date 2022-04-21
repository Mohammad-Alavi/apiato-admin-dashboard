import dayjs from 'dayjs'

export default class Rating {
  constructor (
    object = null,
    id = '',
    score = null,
    text = null,
    isAccepted = null,
    reviewedAt = null,
    createdAt = null
  ) {
    this.object = object
    this.id = id
    this.score = score
    this.text = text
    this.is_accepted = isAccepted
    this.reviewed_at = reviewedAt
    this.created_at = createdAt
  }

  static fromJson (json) {
    return new Rating(
      json.object,
      json.id,
      json.score,
      json.text,
      json.is_accepted,
      dayjs(json.reviewed_at).format('YYYY-MM-DD'),
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
