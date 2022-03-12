import Image from '@/modules/provider/models/image'

export default class Gallery {
  constructor (
    id = null,
    object = null,
    images = null
  ) {
    this.id = id
    this.object = object
    this.images = images
  }

  static fromJson (json) {
    return new Gallery(
      json.id,
      json.object,
      json.images?.data.length > 0 ? Image.fromJsonArray(json.images.data) : []
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(gallery => {
      result.push(this.fromJson(gallery))
    }
    )
    return result
  }
}
