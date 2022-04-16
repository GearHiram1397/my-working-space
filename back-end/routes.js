const { Router } = require('express')
const router = Router()

const authController = require('./controller/api/auth')
router.use(authController)

const usersController = require('./controller/api/users')
router.use(usersController)

module.exports = router;