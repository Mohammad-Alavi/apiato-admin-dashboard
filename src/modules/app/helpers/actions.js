import lodash from 'lodash'

export const urlSearchParamsFromProperties = (payload, customParams, exclude, only) => {
  return paramsFromProperties(payload, customParams, exclude, only, outputType.URLSearchParams)
}

export const formDataFromProperties = (payload, customParams, exclude, only) => {
  return paramsFromProperties(payload, customParams, exclude, only, outputType.FormData)
}

const paramsFromProperties = (payload, customParams, exclude, only, type) => {
  const params = createParams(type)

  setParam(payload, params, exclude, only)

  if (customParams && typeof customParams === 'object') {
    setParam(customParams, params, exclude, only)
  }

  return params
}

const setParam = (object = {}, params, exclude = [], only = []) => {
  exclude = exclude.concat(defaultIgnoredProps)
  for (const key in object) {
    // read more about this stupid
    // Object.prototype.hasOwnProperty.call(object, key)
    // https://dev.to/aman_singh/what-s-the-deal-with-object-prototype-hasownproperty-call-4mbj
    if (Object.prototype.hasOwnProperty.call(object, key) && !lodash.isNil(object[key])) {
      if (only.length && !only.includes(key)) {
        continue
      }
      if (exclude.includes(key)) {
        continue
      }
      if (Array.isArray(object[key])) {
        if (!lodash.isEmpty(object[key])) {
          object[key].forEach(property => {
            params.append(key + '[]', property)
          })
        } else {
          params.append(key + '[]', '')
        }
        // params.set(key, JSON.stringify(object[key]))
        continue
      }
      if (typeof object[key] === 'boolean') {
        params.set(key, object[key] ? 1 : 0)
      } else {
        params.set(key, object[key])
      }
    }
  }
}

export const prepareGetAllURL = (payload, defaultUrl, includes) => {
  const params = new URLSearchParams()

  if (payload.searchQuery) params.set('search', payload.searchQuery)
  if (payload.orderBy) params.set('orderBy', payload.orderBy.join(';'))
  if (payload.sortedBy) params.set('sortedBy', payload.sortedBy)
  params.set('page', payload.currentPage ?? 1)
  params.set('limit', payload.perPage ?? 2000)
  if (payload.withIncludes && !!includes) {
    if (Array.isArray(includes)) {
      params.set('include', includes.join(','))
    } else {
      params.set('include', includes)
    }
  }

  let url = `/${defaultUrl}?${params.toString()}`

  if (payload.additionalParams && payload.additionalParams.length) {
    payload.additionalParams.forEach(param => {
      url += `&${param}`
    })
  }

  return url
}

const createParams = (type) => {
  let params

  if (type === outputType.URLSearchParams) {
    params = new URLSearchParams()
  }
  if (type === outputType.FormData) {
    params = new FormData()
  }

  return params
}

const outputType = Object.freeze({
  URLSearchParams: 1,
  FormData: 2
})

const defaultIgnoredProps = ['id', 'object', 'created_at']
