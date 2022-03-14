import Slider from '@/modules/slider/models/slider'
import dayjs from 'dayjs'
import lodash from 'lodash'
import User from '@/modules/users/models/user'
import Gallery from '@/modules/provider/models/gallery'
import Sport from '@/modules/taxonomy/models/sport'
import Job from '@/modules/taxonomy/models/job'
import Skill from '@/modules/taxonomy/models/skill'
import Language from '@/modules/provider/models/language'

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
    sports = [],
    jobs = [],
    skills = [],
    user = null,
    gallery = null,
    object = '',
    languageNames = '',
    sportNames = '',
    jobNames = '',
    skillNames = ''
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.hourly_rate = hourlyRate
    this.published_at = publishedAt
    this.order = order
    this.languages = languages
    this.sliders = sliders
    this.sports = sports
    this.jobs = jobs
    this.skills = skills
    this.user = user
    this.gallery = gallery
    this.object = object
    this.languageNames = languageNames
    this.sportNames = sportNames
    this.jobNames = jobNames
    this.skillNames = skillNames
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
      json.sports?.data.length > 0 ? Sport.fromJsonArray(json.sports.data) : [],
      json.jobs?.data.length > 0 ? Job.fromJsonArray(json.jobs.data) : [],
      json.skills?.data.length > 0 ? Skill.fromJsonArray(json.skills.data) : [],
      json.user ? User.fromJson(json.user.data) : null,
      json.gallery ? Gallery.fromJson(json.gallery.data) : null,
      json.object,
      Provider.getLanguageNames(json.languages),
      Provider.getTaxonomyNames(json.sports),
      Provider.getTaxonomyNames(json.jobs),
      Provider.getTaxonomyNames(json.skills)
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

  static getTaxonomyNames (taxonomies) {
    const taxonomyNames = []
    if (taxonomies?.data.length > 0) {
      taxonomies.data.forEach(taxonomy => {
        taxonomyNames.push(taxonomy.name)
      })
    }
    return taxonomyNames.join(', ')
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
