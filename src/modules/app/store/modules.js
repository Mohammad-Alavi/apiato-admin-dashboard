import camelCase from 'lodash/camelCase'

const context = require.context('@/modules', true, /\/store\/index.js/)
const modules = {}

context.keys().forEach((file) => {
  // create the camelCase module name from file
  const moduleName = camelCase(file.replace(/(\.\/|\/store\/index.js)/g, ''))

  // don't include main store
  if (file !== './app/store/index.js') {
    // register file context under module name
    modules[moduleName] = context(file).default || context(file)
    // override namespaced option
    modules[moduleName].namespaced = false
  }
})
export default modules
