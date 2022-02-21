import dayjs from 'dayjs'

export default class Order {
  constructor (
    object = null,
    id = null,
    price = null,
    status = null,
    description = null,
    acceptedMessage = null,
    rejectedMessage = null,
    canceledMessage = null,
    userId = null,
    canceledById = null,
    paidAt = null,
    acceptedAt = null,
    rejectedAt = null,
    canceledAt = null,
    createdAt = null,
    updatedAt = null
  ) {
    this.object = object
    this.id = id
    this.price = price
    this.status = status
    this.description = description
    this.accepted_message = acceptedMessage
    this.rejected_message = rejectedMessage
    this.canceled_message = canceledMessage
    this.user_id = userId
    this.canceled_by_id = canceledById
    this.paid_at = paidAt
    this.accepted_at = acceptedAt
    this.rejected_at = rejectedAt
    this.canceled_at = canceledAt
    this.created_at = createdAt
    this.updated_at = updatedAt
  }

  static fromJson (json) {
    return new Order(
      json.object,
      json.id,
      json.price,
      json.status,
      json.description,
      json.accepted_message,
      json.rejected_message,
      json.canceled_message,
      json.user_id,
      json.canceled_by_id,
      json.paid_at ? dayjs(json.paid_at).format('YYYY-MM-DD') : null,
      json.accepted_at ? dayjs(json.accepted_at).format('YYYY-MM-DD') : null,
      json.rejected_at ? dayjs(json.rejected_at).format('YYYY-MM-DD') : null,
      json.canceled_at ? dayjs(json.canceled_at).format('YYYY-MM-DD') : null,
      json.created_at ? dayjs(json.created_at).format('YYYY-MM-DD') : null,
      json.updated_at ? dayjs(json.updated_at).format('YYYY-MM-DD') : null
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(order => {
      result.push(this.fromJson(order))
    }
    )
    return result
  }
}
