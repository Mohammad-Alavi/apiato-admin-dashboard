export default class Role {
  constructor (
    id = null,
    name = '',
    description = '',
    displayName = '',
    object = ''
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.display_name = displayName
    this.object = object
  }

  static fromJson (json) {
    return new Role(
      json.id,
      json.name,
      json.description,
      json.display_name,
      json.object
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(role => {
      result.push(this.fromJson(role))
    }
    )
    return result
  }
}
