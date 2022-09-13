export default class Application {
  constructor (
    object = null,
    id = null,
    name = null,
    email = null,
    phone = null,
    description = null,
    links = null,
    status = null
  ) {
    this.object = object
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.description = description
    this.links = links
    this.status = status
  }

  static fromJson (json) {
    return new Application(
      json.object,
      json.id,
      json.name,
      json.email,
      json.phone,
      json.description,
      json.links,
      json.status
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(application => {
      result.push(this.fromJson(application))
    }
    )
    return result
  }
}
