const db = require("../models")

const { User } = db;

async function defineCurrentUser(req, res, next) {
  try {
    let user = await User.findOne({
      where: {
        userId: req.session.userId
      }
    })
    req.currentUser = user
    next()
  } catch {
    req.currentUser = null
    next()
  }
}

module.exports = defineCurrentUser
