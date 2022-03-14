export default class Language {
  constructor (
    object = null,
    id = null,
    name = null,
    displayNameEn = null,
    displayNameNative = null
  ) {
    this.object = object
    this.id = id
    this.name = name
    this.display_name_en = displayNameEn
    this.display_name_native = displayNameNative
  }

  static fromJson (json) {
    return new Language(
      json.object,
      json.id,
      json.name,
      json.display_name_en,
      json.display_name_native
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(language => {
      result.push(this.fromJson(language))
    }
    )
    return result
  }
}
