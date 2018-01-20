const Coinbase = require('services/coinbase')

module.exports = {

	getAccounts: (req, res, next) => {
		Coinbase.getAccounts({}, (err, accounts) => {
			if (err) console.log(err)
			req.accounts = accounts
			next()
		})
		  
	}

}