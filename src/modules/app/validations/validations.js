// eslint-disable-next-line camelcase
import { confirmed, email, max, min, numeric, required, required_if } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'

setInteractionMode('aggressive')

extend('required', {
  ...required,
  message: '{_field_} is required'
})

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

extend('numeric', {
  ...numeric,
  message: '{_field_} must only consist of numbers'
})

extend('confirmed', {
  ...confirmed,
  message: '{_field_} is wrong'
})

extend('required_if', {
  // eslint-disable-next-line camelcase
  ...required_if,
  message: '{_field_} is required'
})

extend('phone', {
  validate: value => {
    const regex = /^(\+965[569]\d{7})$/
    console.log(regex.test(value))
    return value.match(regex)?.length > 0
  },
  message: 'Phone must be valid'
})
