import dayjs from 'dayjs'
import User from '@/modules/users/models/user'

export default class Request {
  constructor (
    object = null,
    id = null,
    verified = null,
    address = null,
    phone = null,
    introductionMethod = null,
    message = null,
    tosAccepted = null,
    url = null,
    sport = null,
    job = null,
    language = null,
    userId = null,
    user = null
  ) {
    this.object = object
    this.id = id
    this.verified = verified
    this.address = address
    this.phone = phone
    this.introduction_method = introductionMethod
    this.message = message
    this.tos_accepted = tosAccepted
    this.url = url
    this.sport = sport
    this.job = job
    this.language = language
    this.user_id = userId
    this.user = user
  }

  static fromJson (json) {
    return new Request(
      json.object,
      json.id,
      json.verified,
      json.address,
      json.phone,
      json.introduction_method,
      json.message,
      json.tos_accepted ? dayjs(json.tos_accepted).format('YYYY-MM-DD') : null,
      json.url,
      json.sport,
      json.job,
      json.language,
      json.user_id,
      json.user ? User.fromJson(json.user.data) : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(request => {
      result.push(this.fromJson(request))
    }
    )
    return result
  }
}
