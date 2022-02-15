import Provider from '@/modules/users/models/provider'

export default class Slider {
  constructor (
    id = null,
    name = '',
    order = null,
    providers = []
  ) {
    this.id = id
    this.name = name
    this.order = order
    this.providers = providers
    this.providerCount = this.providers.length
  }

  static fromJson (json) {
    return new Slider(
      json.id,
      json.name,
      json.order,
      json.providers?.data.length > 0 ? Provider.fromJsonArray(json.providers.data) : []
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(slider => {
      result.push(this.fromJson(slider))
    }
    )
    return result
  }
}
