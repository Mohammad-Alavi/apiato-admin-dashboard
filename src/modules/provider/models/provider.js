import Slider from '@/modules/slider/models/slider'
import dayjs from 'dayjs'
import User from '@/modules/users/models/user'

export default class Provider {
  constructor (
    id = null,
    name = '',
    description = '',
    hourlyRate = '',
    publishedAt = '',
    order = null,
    sliders = [],
    user = null,
    object = ''
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.hourly_rate = hourlyRate
    this.published_at = publishedAt
    this.order = order
    this.sliders = sliders
    this.user = user
    this.object = object
  }

  static fromJson (json) {
    return new Provider(
      json.id,
      json.name,
      json.description,
      json.hourly_rate,
      json.published_at ? dayjs(json.published_at).format('YYYY-MM-DD') : null,
      json.order,
      json.sliders?.data.length > 0 ? Slider.fromJsonArray(json.sliders.data) : [],
      json.user ? User.fromJson(json.user.data) : null,
      json.object
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(provider => {
      result.push(this.fromJson(provider))
    })

    return result
  }
}
