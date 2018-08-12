exports.obj = {
  'marmalade': 12323
}

exports.coinbaseCurrencies = [
  'ETH',
  'BTC'
]

exports.fullCurrency = {
  'ETH': 'Ethereum',
  'BTC': 'Bitcoin'
}

exports.arrayInsertOrRemove = (arr, item) => {
  let index = arr.indexOf(item)
  if (index > -1){
    arr.splice(index, 1)
  } else {
    arr.push(item)
  }
}