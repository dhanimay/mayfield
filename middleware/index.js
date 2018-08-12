import Coinbase from 'services/coinbase'

export default {
	coinbase: (req, res, next) => {
		Coinbase.getAccounts({}, (err, accounts) => {
			if (err) console.error(err)
			if (!res.locals.accounts) res.locals.accounts = {}
			res.locals.accounts.coinbase = accounts
			res.locals.currencies = accounts.map(account => account.currency)
			next()
		})
	}

}