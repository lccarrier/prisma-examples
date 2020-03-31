const { objectType } = require('nexus')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({ pagination: false })
    t.model.profile()
  },
})

module.exports = {
  User,
}
