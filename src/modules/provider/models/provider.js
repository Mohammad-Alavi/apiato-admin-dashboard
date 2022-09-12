import Slider from '@/modules/slider/models/slider'
import dayjs from 'dayjs'
import lodash from 'lodash'
import User from '@/modules/users/models/user'
import Gallery from '@/modules/provider/models/gallery'
import Specialization from '@/modules/taxonomy/models/specialization'
import Language from '@/modules/provider/models/language'
import Category from '@/modules/taxonomy/models/category'

export default class Provider {
  constructor (
    id = null,
    name = '',
    description = '',
    hourlyRate = '',
    publishedAt = '',
    order = null,
    sliders = [],
    languages = [],
    categories = [],
    specializations = [],
    user = null,
    gallery = null,
    object = '',
    languageNames = '',
    categoryNames = '',
    specializationNames = ''
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.hourly_rate = hourlyRate
    this.published_at = publishedAt
    this.order = order
    this.languages = languages
    this.sliders = sliders
    this.categories = categories
    this.specializations = specializations
    this.user = user
    this.gallery = gallery
    this.object = object
    this.languageNames = languageNames
    this.categoryNames = categoryNames
    this.specializationNames = specializationNames
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
      json.languages?.data.length > 0 ? Language.fromJsonArray(json.languages.data) : [],
      json.categories?.data.length > 0 ? Category.fromJsonArray(json.categories.data) : [],
      json.specializations?.data.length > 0 ? Specialization.fromJsonArray(json.specializations.data) : [],
      json.user ? User.fromJson(json.user.data) : null,
      json.gallery ? Gallery.fromJson(json.gallery.data) : null,
      json.object,
      Provider.getLanguageNames(json.languages),
      Provider.getCategoryNames(json.categories),
      Provider.getSpecializationNames(json.specializations)
    )
  }

  static fromJsonArray (json) {
    const result = []
    json.forEach(provider => {
      result.push(this.fromJson(provider))
    })

    return result
  }

  isInSlider (sliderId) {
    return lodash.find(this.sliders, slider => slider.id === sliderId) !== undefined
  }

  orderInSlider (sliderId) {
    if (this.isInSlider(sliderId)) {
      const slider = lodash.find(this.sliders, slider => slider.id === sliderId)
      const provider = lodash.find(slider.providers, provider => provider.id === this.id)

      return provider.order
    } else {
      return null
    }
  }

  static getCategoryNames (categories) {
    const categoryNames = []
    if (categories?.data.length > 0) {
      categories.data.forEach(category => {
        categoryNames.push(category.label_en)
      })
    }
    return categoryNames.join(', ')
  }

  static getSpecializationNames (specializations) {
    const specializationNames = []
    if (specializations?.data.length > 0) {
      specializations.data.forEach(specialization => {
        specializationNames.push(specialization.label_en)
      })
    }
    return specializationNames.join(', ')
  }

  static getLanguageNames (languages) {
    const languageNames = []
    if (languages?.data.length > 0) {
      languages.data.forEach(language => {
        languageNames.push(language.name)
      })
    }
    return languageNames.join(', ')
  }
}
