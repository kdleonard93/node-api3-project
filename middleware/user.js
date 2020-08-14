const users = require("../users/users-model")

function validateUserID() {
	return (req, res, next) => {
		users.findById(req.params.id)
			.then((user) => {
				if (user) {
					req.user = user
					next()
				} else {
					res.status(404).json({
						message: "User not found",
					})
				}
			})
			.catch(next)
	}
}

function validateUser() {
	return (req, res, next) => {

			}
		}




function validatePost() {
    return (req, res, next) => {

    }
}

module.exports = {
	validateUserID,
    validateUser,
    validatePost,
}