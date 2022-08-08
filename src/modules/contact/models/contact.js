import dayjs from 'dayjs'

export default class Contact {
  constructor (
    object = null,
    id = null,
    topic = null,
    name = null,
    email = null,
    message = null,
    resolvedAt = null,
    createdAt = null
  ) {
    this.object = object
    this.id = id
    this.topic = topic
    this.name = name
    this.email = email
    this.message = message
    this.resolved_at = resolvedAt
    this.created_at = createdAt
  }

  static fromJson (json) {
    return new Contact(
      json.object,
      json.id,
      json.topic,
      json.name,
      json.email,
      json.message,
      json.resolved_at ? dayjs(json.resolved_at).format('YYYY-MM-DD') : null,
      json.created_at ? dayjs(json.created_at).format('YYYY-MM-DD') : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(contact => {
      result.push(this.fromJson(contact))
    }
    )
    return result
  }
}
