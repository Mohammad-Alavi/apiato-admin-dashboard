import dayjs from 'dayjs'
import Role from '@/modules/users/models/role'
import Provider from '@/modules/users/models/provider'

export default class User {
  constructor (
    id = null,
    name = '',
    email = '',
    object = '',
    roles = [],
    rolesNames = '',
    suspendedAt = null,
    gender = null,
    provider = null,
    birth = null,
    emailVerifiedAt = false,
    createdAt = ''
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.object = object
    this.roles = roles
    this.roles_names = rolesNames
    this.suspended_at = suspendedAt
    this.gender = gender
    this.provider = provider
    this.birth = birth
    this.email_verified_at = emailVerifiedAt
    this.created_at = createdAt
  }

  static fromJson (json) {
    return new User(
      json.id,
      json.name,
      json.email,
      json.object,
 json.roles?.data.length > 0 ? Role.fromJsonArray(json.roles.data) : [],
 User.getRoleNames(json),
 json.suspended_at ? dayjs(json.suspended_at).format('YYYY-MM-DD') : null,
 json.gender,
 json.provider ? Provider.fromJson(json.provider) : null,
 json.birth ? dayjs(json.birth).format('YYYY-MM-DD') : null,
 json.email_verified_at ? dayjs(json.email_verified_at).format('YYYY-MM-DD') : null,
 dayjs(json.created_at).format('YYYY-MM-DD'))
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(user => {
      result.push(this.fromJson(user))
    }
    )
    return result
  }

  static getRoleNames (json) {
    const roleNames = []
    if (json.roles?.data.length > 0) {
      json.roles.data.forEach(role => {
        roleNames.push(role.display_name)
      })
    }
    return roleNames.join()
  }
}
