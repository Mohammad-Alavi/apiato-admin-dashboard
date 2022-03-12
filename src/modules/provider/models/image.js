export default class Image {
  constructor (
    id = null,
    object = null,
    file = null,
    ext = null,
    filename = null,
    order = null
  ) {
    this.id = id
    this.object = object
    this.file = file
    this.ext = ext
    this.filename = filename
    this.order = order
  }

  static fromJson (json) {
    return new Image(
      json.id,
      json.object,
      json.file,
      json.ext,
      json.filename,
      json.order
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(image => {
      result.push(this.fromJson(image))
    }
    )
    return result
  }
}
