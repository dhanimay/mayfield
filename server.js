/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/api.js":
/*!***********************!*\
  !*** ./client/api.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';\n    var data = arguments[2];\n    var options, result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            options = {\n              url: '' + window.env.api + url,\n              method: method\n            };\n\n            if (data) options.data = data;\n\n            _context.next = 4;\n            return (0, _axios2.default)(options);\n\n          case 4:\n            result = _context.sent;\n            return _context.abrupt('return', result.data);\n\n          case 6:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  function api(_x2) {\n    return _ref.apply(this, arguments);\n  }\n\n  return api;\n}();\n\n//# sourceURL=webpack:///./client/api.js?");

/***/ }),

/***/ "./client/utils.js":
/*!*************************!*\
  !*** ./client/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _utils = __webpack_require__(/*! shared/utils.js */ \"./shared/utils.js\");\n\nvar shared = _interopRequireWildcard(_utils);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.serviceDescriptions = {\n  'coinbase': 'Coinbase is a secure online platform for buying, selling, transferring, and storing digital currency.',\n  'robinhood': 'A lean, mean app-based brokerage touting commission-free stock and ETF trading and an intuitive, though basic, trading interface.'\n};\n\nexports = Object.assign(exports, shared);\n\n//# sourceURL=webpack:///./client/utils.js?");

/***/ }),

/***/ "./config/client.js":
/*!**************************!*\
  !*** ./config/client.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar client = {};\nvar environment = \"development\";\n\nclient.api = process.env[environment + \"_api\"];\nexports.default = client;\n\n//# sourceURL=webpack:///./config/client.js?");

/***/ }),

/***/ "./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client,\n    Pool = _require.Pool;\n\nvar connection = {\n  user: process.env.PGUSER,\n  host: process.env.PGHOST,\n  database: process.env.PGDATABASE,\n  password: process.env.PGPASSWORD,\n  port: process.env.PGPORT\n};\n\nvar client = new Client(connection);\nvar pool = new Pool(connection);\npool; // DELETE THIS - just to shut the linter up\n\nclient.connect();\n\nmodule.exports.query = function (text, params) {\n  return client.query(text, params);\n};\n\n//# sourceURL=webpack:///./db/index.js?");

/***/ }),

/***/ "./lib/redis.js":
/*!**********************!*\
  !*** ./lib/redis.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redis = __webpack_require__(/*! redis */ \"redis\");\n\nvar _redis2 = _interopRequireDefault(_redis);\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar client = _redis2.default.createClient();\n// import bluebird from 'bluebird'\n// bluebird.promisifyAll(Redis)\n\nclient.on('error', function (err) {\n  console.log('Error ' + err);\n});\n\nclient.get = (0, _util.promisify)(client.get).bind(client);\n\nexports.default = client;\n\n//# sourceURL=webpack:///./lib/redis.js?");

/***/ }),

/***/ "./lib/to.js":
/*!*******************!*\
  !*** ./lib/to.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = to;\nfunction to(promise) {\n  return promise.then(function (data) {\n    return [null, data];\n  }).catch(function (err) {\n    return [err];\n  });\n}\n\n//# sourceURL=webpack:///./lib/to.js?");

/***/ }),

/***/ "./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar db = __webpack_require__(/*! ../db */ \"./db/index.js\");\n\nmodule.exports.create = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {\n    var _ref2, rows;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return db.query('\\n    insert into\\n      users\\n    (id, first_name, last_name, email)\\n      values\\n    ($1, $2, $3, $4)\\n  ', [user.id, user.first_name, user.last_name, user.email]);\n\n          case 2:\n            _ref2 = _context.sent;\n            rows = _ref2.rows;\n\n            if (rows) {\n              _context.next = 6;\n              break;\n            }\n\n            throw new Error('No user found');\n\n          case 6:\n            return _context.abrupt('return', rows);\n\n          case 7:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports.findById = function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {\n    var _ref4, rows;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return db.query('\\n    select * from users where id=$1\\n  ', [id]);\n\n          case 2:\n            _ref4 = _context2.sent;\n            rows = _ref4.rows;\n            return _context2.abrupt('return', rows);\n\n          case 5:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./models/users.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar validateToken = function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {\n    var token, userId;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            // will change to a Redis.get {\n            token = 'fjasldfjo3ujr039u4032u3o';\n            userId = null;\n\n            if (req.cookies.token === token) {\n              userId = 1;\n            }\n            // }\n\n            if (userId === null) {\n              res.json({\n                err: true,\n                message: 'Unauthorized'\n              });\n            }\n\n            _context3.next = 6;\n            return _users2.default.findById(userId);\n\n          case 6:\n            res.locals.user = _context3.sent;\n\n            next();\n\n          case 8:\n          case 'end':\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n\n  return function validateToken(_x5, _x6, _x7) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar _bluebird2 = _interopRequireDefault(_bluebird);\n\nvar _app = __webpack_require__(/*! views/components/app.jsx */ \"./views/components/app.jsx\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _users = __webpack_require__(/*! models/users.js */ \"./models/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _client = __webpack_require__(/*! config/client */ \"./config/client.js\");\n\nvar _client2 = _interopRequireDefault(_client);\n\nvar _coinbase = __webpack_require__(/*! services/coinbase.js */ \"./services/coinbase.js\");\n\nvar _coinbase2 = _interopRequireDefault(_coinbase);\n\nvar _robinhood = __webpack_require__(/*! services/robinhood.js */ \"./services/robinhood.js\");\n\nvar _robinhood2 = _interopRequireDefault(_robinhood);\n\nvar _redis = __webpack_require__(/*! lib/redis.js */ \"./lib/redis.js\");\n\nvar _redis2 = _interopRequireDefault(_redis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar app = (0, _express2.default)();\n// import db from 'db'\n\nvar Promise = _bluebird2.default;\n\n\napp.use((0, _cors2.default)());\napp.set('view engine', 'pug');\n\napp.use((0, _cookieParser2.default)());\napp.get('/', serveApp);\napp.use(_express2.default.static('public'));\n\napp.post('/api/login', function (req, res) {\n  res.cookie('token', 'fjasldfjo3ujr039u4032u3o');\n  res.json({\n    err: null,\n    ok: true\n  });\n});\n\napp.get('/api/accounts/:id', validateToken, function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var accounts, coinbaseCurrencies;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.props({\n              coinbase: _coinbase2.default.getAccounts({}),\n              robinhood: _robinhood2.default.investments()\n            });\n\n          case 2:\n            accounts = _context.sent;\n            coinbaseCurrencies = accounts.coinbase.map(function (account) {\n              return account.currency;\n            });\n\n            _redis2.default.set('coinbase.currencies', JSON.stringify(coinbaseCurrencies));\n            res.json(accounts);\n\n          case 6:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.get('/api/coinbase/currency/:currency/market', function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var localCurrency, coinbaseRequests, coinbaseCurrencies, prices;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            localCurrency = 'USD';\n            coinbaseRequests = null;\n\n            if (!(req.params.currency === 'all')) {\n              _context2.next = 10;\n              break;\n            }\n\n            _context2.next = 5;\n            return _redis2.default.get('coinbase.currencies');\n\n          case 5:\n            coinbaseCurrencies = _context2.sent;\n\n            coinbaseCurrencies = JSON.parse(coinbaseCurrencies);\n            coinbaseRequests = coinbaseCurrencies.reduce(function (props, currency) {\n              props[currency] = new Promise(function (resolve) {\n                _coinbase2.default.getSpotPrice({ 'currencyPair': currency + '-' + localCurrency }, function (err, _ref3) {\n                  var data = _ref3.data;\n\n                  resolve(data);\n                });\n              });\n              return props;\n            }, {});\n            _context2.next = 12;\n            break;\n\n          case 10:\n            coinbaseRequests = {};\n            coinbaseRequests[req.params.currency] = _coinbase2.default.getSpotPrice({ 'currencyPair': req.params.currency + '-' + localCurrency });\n\n          case 12:\n            _context2.next = 14;\n            return Promise.props(coinbaseRequests);\n\n          case 14:\n            prices = _context2.sent;\n\n            res.json(prices);\n\n          case 16:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\n// app.post('/', async (req, res) => {\n//   // let response = await Users.findById(1)\n//   res.json('ok')\n// })\n\n\napp.get('/*', serveApp);\n\nfunction serveApp(req, res) {\n  console.log(req.url);\n  // props.staticContext.data\n  var initialData = {};\n  var context = { data: {} };\n  var markup = _server2.default.renderToString(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_app2.default, { data: '' })\n  ));\n  res.send('\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>React Server Side Rendering</title>\\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\" />\\n        <link rel=\\'stylesheet\\' type=\\'text/css\\' href=\\'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\\' />\\n        <script>\\n          window.__INITIAL_DATA__ = JSON.parse(\\'' + JSON.stringify(initialData) + '\\')\\n          window.env = JSON.parse(\\'' + JSON.stringify(_client2.default) + '\\')\\n        </script>\\n      </head>\\n      <body>\\n        <div id=\\'app\\'>' + markup + '</div>\\n        <script type=\\'text/javascript\\' src=\\'build.js\\'></script>\\n        </body>\\n        </html>\\n        ');\n  // <script type='text/javascript' src='${process.env[`${process.env.NODE_ENV}_origin`]}/public/build.js'></script>\n}\n\napp.use(function (err, req, res, next) {\n  console.log(err.stack);\n  if (req.xhr) {\n    res.status(500).send({ error: err.message });\n  } else {\n    next(err);\n  }\n});\n\napp.listen(3000, function () {\n  console.log('server running on port 3000....');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./services/coinbase.js":
/*!******************************!*\
  !*** ./services/coinbase.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _coinbase = __webpack_require__(/*! coinbase */ \"coinbase\");\n\nvar _util = __webpack_require__(/*! util */ \"util\");\n\nvar client = new _coinbase.Client({\n  'apiKey': process.env.COINBASE_API,\n  'apiSecret': process.env.COINBASE_SECRET\n});\n\nclient.getAccounts = (0, _util.promisify)(client.getAccounts).bind(client);\nexports.default = client;\n\n//# sourceURL=webpack:///./services/coinbase.js?");

/***/ }),

/***/ "./services/robinhood.js":
/*!*******************************!*\
  !*** ./services/robinhood.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _to = __webpack_require__(/*! lib/to.js */ \"./lib/to.js\");\n\nvar _to2 = _interopRequireDefault(_to);\n\nvar _nodeFetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nvar _nodeFetch2 = _interopRequireDefault(_nodeFetch);\n\nvar _redis = __webpack_require__(/*! lib/redis */ \"./lib/redis.js\");\n\nvar _redis2 = _interopRequireDefault(_redis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar robinhoodApi = process.env.ROBINHOOD_API_URL;\nvar robinhoodToken = null;\n\n(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var user;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _redis2.default.get('robinhood.token');\n\n          case 2:\n            robinhoodToken = _context.sent;\n\n            if (robinhoodToken) {\n              _context.next = 6;\n              break;\n            }\n\n            _context.next = 6;\n            return exports.loginToRobinhood();\n\n          case 6:\n            _context.next = 8;\n            return _redis2.default.get('robinhood.user');\n\n          case 8:\n            user = _context.sent;\n\n            if (!user) exports.getUser();\n\n          case 10:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  function loginAndGetUser() {\n    return _ref.apply(this, arguments);\n  }\n\n  return loginAndGetUser;\n})()();\n\nexports.loginToRobinhood = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n  var err, response, loginOptions, _ref3, _ref4, _ref5, token;\n\n  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          err = void 0, response = void 0;\n          loginOptions = {\n            method: 'POST',\n            mode: 'cors',\n            headers: {\n              'Accept': 'application/json',\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              username: process.env.ROBINHOOD_USERNAME,\n              password: process.env.ROBINHOOD_PASSWORD\n            })\n          };\n          _context2.next = 4;\n          return (0, _to2.default)((0, _nodeFetch2.default)(robinhoodApi + '/api-token-auth/', loginOptions));\n\n        case 4:\n          _ref3 = _context2.sent;\n          _ref4 = _slicedToArray(_ref3, 2);\n          err = _ref4[0];\n          response = _ref4[1];\n\n          if (err) console.error('Error ', err);\n          _context2.next = 11;\n          return response.json();\n\n        case 11:\n          _ref5 = _context2.sent;\n          token = _ref5.token;\n\n          _redis2.default.set('robinhood.token', token);\n\n        case 14:\n        case 'end':\n          return _context2.stop();\n      }\n    }\n  }, _callee2, this);\n}));\n\nexports.getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n  var err, response, _ref7, _ref8, user;\n\n  return regeneratorRuntime.wrap(function _callee3$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          err = void 0, response = void 0;\n          _context3.next = 3;\n          return (0, _to2.default)((0, _nodeFetch2.default)(robinhoodApi + '/user/', {\n            headers: {\n              'Authorization': 'Token ' + robinhoodToken,\n              'Accept': 'application/json',\n              'Content-Type': 'application/json'\n            }\n          }));\n\n        case 3:\n          _ref7 = _context3.sent;\n          _ref8 = _slicedToArray(_ref7, 2);\n          err = _ref8[0];\n          response = _ref8[1];\n\n          if (err) console.error('Error ', err);\n          _context3.next = 10;\n          return response.json();\n\n        case 10:\n          user = _context3.sent;\n\n          _redis2.default.set('robinhood.user', JSON.stringify(user));\n          return _context3.abrupt('return', user);\n\n        case 13:\n        case 'end':\n          return _context3.stop();\n      }\n    }\n  }, _callee3, this);\n}));\n\nexports.investments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n  var positions;\n  return regeneratorRuntime.wrap(function _callee4$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return exports.getPositions(true);\n\n        case 2:\n          positions = _context4.sent;\n          _context4.next = 5;\n          return exports.getPositionInstruments(positions);\n\n        case 5:\n          _context4.next = 7;\n          return exports.getPositionQuotes(positions);\n\n        case 7:\n          return _context4.abrupt('return', positions);\n\n        case 8:\n        case 'end':\n          return _context4.stop();\n      }\n    }\n  }, _callee4, this);\n}));\n\nexports.getPositions = function () {\n  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(currentlyHeld) {\n    var err, response, requestOptions, _ref11, _ref12, data;\n\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            err = void 0, response = void 0;\n            requestOptions = {\n              method: 'GET',\n              mode: 'cors',\n              headers: {\n                'Authorization': 'Token ' + robinhoodToken,\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n              }\n            };\n            _context5.next = 4;\n            return (0, _to2.default)((0, _nodeFetch2.default)(robinhoodApi + '/positions/', requestOptions));\n\n          case 4:\n            _ref11 = _context5.sent;\n            _ref12 = _slicedToArray(_ref11, 2);\n            err = _ref12[0];\n            response = _ref12[1];\n\n            if (err) console.error('Error ', err);\n            _context5.next = 11;\n            return response.json();\n\n          case 11:\n            data = _context5.sent;\n\n            if (currentlyHeld) {\n              _context5.next = 14;\n              break;\n            }\n\n            return _context5.abrupt('return', data.results);\n\n          case 14:\n            return _context5.abrupt('return', data.results.filter(function (position) {\n              return position.quantity > 0;\n            }));\n\n          case 15:\n          case 'end':\n            return _context5.stop();\n        }\n      }\n    }, _callee5, this);\n  }));\n\n  return function (_x) {\n    return _ref10.apply(this, arguments);\n  };\n}();\n\nexports.getPositionInstruments = function () {\n  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(positions) {\n    var requestOptions, positionRequests, results, instruments, i;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            requestOptions = {\n              method: 'GET',\n              mode: 'cors',\n              headers: {\n                'Authorization': 'Token ' + robinhoodToken,\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n              }\n            };\n            positionRequests = positions.map(function (position) {\n              return (0, _nodeFetch2.default)(position.instrument, requestOptions);\n            });\n            _context6.next = 4;\n            return Promise.all(positionRequests);\n\n          case 4:\n            results = _context6.sent;\n            _context6.next = 7;\n            return Promise.all(results.map(function (instrument) {\n              return instrument.json();\n            }));\n\n          case 7:\n            instruments = _context6.sent;\n\n            for (i = 0; i < positions.length; i++) {\n              positions[i] = Object.assign(positions[i], instruments[i]);\n            }\n\n          case 9:\n          case 'end':\n            return _context6.stop();\n        }\n      }\n    }, _callee6, this);\n  }));\n\n  return function (_x2) {\n    return _ref13.apply(this, arguments);\n  };\n}();\n\nexports.getPositionQuotes = function () {\n  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(positions) {\n    var requestOptions, positionRequests, results, instruments, i;\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            requestOptions = {\n              method: 'GET',\n              mode: 'cors',\n              headers: {\n                'Authorization': 'Token ' + robinhoodToken,\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n              }\n            };\n            positionRequests = positions.map(function (position) {\n              return (0, _nodeFetch2.default)(position.quote, requestOptions);\n            });\n            _context7.next = 4;\n            return Promise.all(positionRequests);\n\n          case 4:\n            results = _context7.sent;\n            _context7.next = 7;\n            return Promise.all(results.map(function (instrument) {\n              return instrument.json();\n            }));\n\n          case 7:\n            instruments = _context7.sent;\n\n            for (i = 0; i < positions.length; i++) {\n              positions[i] = Object.assign(positions[i], instruments[i]);\n            }\n\n          case 9:\n          case 'end':\n            return _context7.stop();\n        }\n      }\n    }, _callee7, this);\n  }));\n\n  return function (_x3) {\n    return _ref14.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./services/robinhood.js?");

/***/ }),

/***/ "./shared/utils.js":
/*!*************************!*\
  !*** ./shared/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.obj = {\n  'marmalade': 12323\n};\n\nexports.coinbaseCurrencies = ['ETH', 'BTC'];\n\nexports.fullCurrency = {\n  'ETH': 'Ethereum',\n  'BTC': 'Bitcoin'\n};\n\nexports.arrayInsertOrRemove = function (arr, item) {\n  var index = arr.indexOf(item);\n  if (index > -1) {\n    arr.splice(index, 1);\n  } else {\n    arr.push(item);\n  }\n};\n\n//# sourceURL=webpack:///./shared/utils.js?");

/***/ }),

/***/ "./views/components/app.jsx":
/*!**********************************!*\
  !*** ./views/components/app.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _utils = __webpack_require__(/*! shared/utils.js */ \"./shared/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _dashboard = __webpack_require__(/*! views/components/dashboard.jsx */ \"./views/components/dashboard.jsx\");\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nvar _webRTCPlayground = __webpack_require__(/*! views/components/webRTCPlayground.jsx */ \"./views/components/webRTCPlayground.jsx\");\n\nvar _webRTCPlayground2 = _interopRequireDefault(_webRTCPlayground);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n// import ReactDOM from 'react-dom'\n\n\nvar LinkButton = (0, _reactRouterDom.withRouter)(function (_ref) {\n  var maybeNavigate = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var _ref3, data;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return test();\n\n            case 2:\n              _ref3 = _context.sent;\n              data = _ref3.data;\n\n              if (data.ok) {\n                history.push(path);\n              } else if (data.err) {\n                alert(data.err);\n              }\n\n            case 5:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    return function maybeNavigate() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var history = _ref.history,\n      test = _ref.test,\n      path = _ref.path,\n      className = _ref.className;\n\n  return _react2.default.createElement(\n    'button',\n    { className: className, type: 'button', onClick: maybeNavigate },\n    'ok'\n  );\n});\n\nvar Home = function Home() {\n  var validateCredentials = function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              return _context2.abrupt('return', _axios2.default.post(window.env.api + '/login'));\n\n            case 1:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    return function validateCredentials() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'login-view' },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Hello!'\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'panel' },\n      _react2.default.createElement(\n        'div',\n        { className: 'row' },\n        _react2.default.createElement(\n          'label',\n          { className: 'col-3' },\n          'username:'\n        ),\n        _react2.default.createElement('input', { type: 'text', className: 'col-9 username' })\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'row' },\n        _react2.default.createElement(\n          'label',\n          { className: 'col-3' },\n          'password:'\n        ),\n        _react2.default.createElement('input', { type: 'password', className: 'col-9 password' })\n      ),\n      _react2.default.createElement(LinkButton, { className: 'submit', path: '/dashboard', test: validateCredentials })\n    )\n  );\n};\n\nvar PropsRoute = function PropsRoute(_ref5) {\n  var C = _ref5.component,\n      props = _objectWithoutProperties(_ref5, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, props, { render: function render(routeProps) {\n      var mergedProps = Object.assign({}, routeProps, props);\n      // return React.createElement(component, mergedProps)\n      return _react2.default.createElement(C, mergedProps);\n    } }));\n};\n\nvar Missing = function Missing() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    '404 page not found'\n  );\n};\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n    _this.state = {\n      user: {\n        id: 1,\n        first_name: 'Dhani',\n        mayfield_name: 'Mayfield'\n      }\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log(_utils2.default.obj);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'main',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),\n          _react2.default.createElement(PropsRoute, { path: '/dashboard', component: _dashboard2.default, user: this.state.user }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/rtc', component: _webRTCPlayground2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { component: Missing })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./views/components/app.jsx?");

/***/ }),

/***/ "./views/components/coinbaseItem.jsx":
/*!*******************************************!*\
  !*** ./views/components/coinbaseItem.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _utils = __webpack_require__(/*! shared/utils.js */ \"./shared/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar CoinbaseItem = function CoinbaseItem(_ref) {\n  var accounts = _ref.accounts,\n      expandedInvestments = _ref.expandedInvestments,\n      props = _objectWithoutProperties(_ref, ['accounts', 'expandedInvestments']);\n\n  var coinbaseUrl = 'https://www.coinbase.com/';\n  var titleElement = null;\n  var overServiceDescription = function overServiceDescription() {\n    var rect = titleElement.getBoundingClientRect();\n    props.overServiceDescription(rect, props.service);\n  };\n\n  var toggleInvestmentItem = function toggleInvestmentItem(investment) {\n    return function () {\n      props.toggleInvestmentItem(investment);\n    };\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'service-item' },\n    _react2.default.createElement(\n      'a',\n      { className: 'service-title',\n        href: coinbaseUrl,\n        ref: function ref(component) {\n          return titleElement = component;\n        },\n        onMouseEnter: overServiceDescription,\n        onMouseLeave: props.hideServiceDescription\n      },\n      props.service\n    ),\n    accounts.map(function (account, index) {\n      return _react2.default.createElement(\n        'div',\n        { key: index, className: 'investment-item ' + (expandedInvestments.includes(account.currency) ? 'expanded' : '') },\n        _react2.default.createElement(\n          'p',\n          { className: 'toggle', onClick: toggleInvestmentItem(account.currency) },\n          _react2.default.createElement('span', { className: 'arrow' }),\n          _utils2.default.fullCurrency[account.currency],\n          '(',\n          account.currency,\n          ')',\n          _react2.default.createElement(\n            'span',\n            { className: 'amount' },\n            '$',\n            account.native_balance.amount\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'investment-details' },\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              null,\n              'Amount: '\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              account.balance.amount\n            )\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              null,\n              'Market price: '\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              '$',\n              account.market\n            )\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = CoinbaseItem;\n\n//# sourceURL=webpack:///./views/components/coinbaseItem.jsx?");

/***/ }),

/***/ "./views/components/dashboard.jsx":
/*!****************************************!*\
  !*** ./views/components/dashboard.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _utils = __webpack_require__(/*! client/utils.js */ \"./client/utils.js\");\n\nvar utils = _interopRequireWildcard(_utils);\n\nvar _api = __webpack_require__(/*! client/api */ \"./client/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _coinbaseItem = __webpack_require__(/*! views/components/coinbaseItem.jsx */ \"./views/components/coinbaseItem.jsx\");\n\nvar _coinbaseItem2 = _interopRequireDefault(_coinbaseItem);\n\nvar _robinhoodItem = __webpack_require__(/*! views/components/robinhoodItem.jsx */ \"./views/components/robinhoodItem.jsx\");\n\nvar _robinhoodItem2 = _interopRequireDefault(_robinhoodItem);\n\nvar _spinner = __webpack_require__(/*! views/components/spinner.jsx */ \"./views/components/spinner.jsx\");\n\nvar _spinner2 = _interopRequireDefault(_spinner);\n\nvar _descriptionModal = __webpack_require__(/*! views/components/descriptionModal.jsx */ \"./views/components/descriptionModal.jsx\");\n\nvar _descriptionModal2 = _interopRequireDefault(_descriptionModal);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar serviceItems = {\n  'coinbase': _coinbaseItem2.default,\n  'robinhood': _robinhoodItem2.default\n};\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    // let accounts\n    // if (__isBrowser__) {\n    //   accounts = window.__INITIAL_DATA__\n    //   delete window.__INITIAL_DATA__\n    // } else {\n    //   accounts = props.staticContext.data\n    // }\n\n    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n\n    _this.state = {\n      accounts: {},\n      loading: true,\n      serviceDescription: {\n        show: false,\n        rect: null,\n        mouseOver: false,\n        delay: 1000,\n        service: null\n      },\n      expandedInvestments: [],\n      investmentsTotal: 0\n    };\n\n    _this.overServiceDescription = _this.overServiceDescription.bind(_this);\n    _this.hideServiceDescription = _this.hideServiceDescription.bind(_this);\n    _this.toggleInvestmentItem = _this.toggleInvestmentItem.bind(_this);\n    return _this;\n  }\n\n  _createClass(Dashboard, [{\n    key: 'componentDidMount',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var accounts, newState, coinbaseCurrenyPrices;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0, _api2.default)('/accounts/' + this.props.user.id);\n\n              case 2:\n                accounts = _context.sent;\n\n                console.log(accounts);\n                this.coinbaseAddedToTotal(accounts.coinbase);\n                this.robinhoodAddedToTotal(accounts.robinhood);\n                newState = Object.assign({}, this.state, {\n                  accounts: accounts,\n                  loading: false\n                });\n\n                this.setState(newState);\n\n                _context.next = 10;\n                return (0, _api2.default)('/coinbase/currency/all/market');\n\n              case 10:\n                coinbaseCurrenyPrices = _context.sent;\n\n                this.extendCoinbaseCryptos(coinbaseCurrenyPrices);\n\n              case 12:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _ref.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n\n    // Find out how to deep clone objects\n\n  }, {\n    key: 'overServiceDescription',\n    value: function overServiceDescription(rect, service) {\n      var _this2 = this;\n\n      var newState = Object.assign({}, this.state, {\n        serviceDescription: {\n          mouseOver: true\n        }\n      });\n      this.setState(newState);\n\n      setTimeout(function () {\n        if (!_this2.state.serviceDescription.mouseOver) return;\n        var newState = Object.assign({}, _this2.state, {\n          serviceDescription: {\n            show: true,\n            rect: rect,\n            service: service\n          }\n        });\n        _this2.setState(newState);\n      }, this.state.serviceDescription.delay);\n    }\n  }, {\n    key: 'hideServiceDescription',\n    value: function hideServiceDescription() {\n      var newState = Object.assign({}, this.state, {\n        serviceDescription: {\n          show: false,\n          rect: null,\n          mouseOver: false\n        }\n      });\n      this.setState(newState);\n    }\n  }, {\n    key: 'toggleInvestmentItem',\n    value: function toggleInvestmentItem(investment) {\n      var expandedInvestments = this.state.expandedInvestments.slice();\n      utils.arrayInsertOrRemove(expandedInvestments, investment);\n      var newState = Object.assign({}, this.state, {\n        expandedInvestments: expandedInvestments\n      });\n      this.setState(newState);\n    }\n  }, {\n    key: 'coinbaseAddedToTotal',\n    value: function coinbaseAddedToTotal(coinbase) {\n      var cryptosTotal = 0;\n      coinbase.forEach(function (crypto) {\n        cryptosTotal += parseInt(crypto.native_balance.amount);\n      });\n      var newState = Object.assign({}, this.state, {\n        investmentsTotal: this.state.investmentsTotal + cryptosTotal\n      });\n      this.setState(newState);\n    }\n  }, {\n    key: 'robinhoodAddedToTotal',\n    value: function robinhoodAddedToTotal(robinhood) {\n      var stockTotal = 0;\n      robinhood.forEach(function (stock) {\n        stockTotal += parseInt(stock.last_trade_price) * parseInt(stock.quantity);\n      });\n      var newState = Object.assign({}, this.state, {\n        investmentsTotal: this.state.investmentsTotal + stockTotal\n      });\n      this.setState(newState);\n    }\n  }, {\n    key: 'extendCoinbaseCryptos',\n    value: function extendCoinbaseCryptos(prices) {\n      var cryptos = this.state.accounts.coinbase.slice();\n      cryptos.forEach(function (crypto) {\n        var priceData = prices[crypto.currency];\n        if (priceData) crypto.market = priceData.amount;\n      });\n      var newState = Object.assign({}, this.state, {\n        accounts: {\n          coinbase: cryptos\n        }\n      });\n      this.setState(newState);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var contentClass = '';\n      if (this.state.loading) contentClass = 'loading';\n      var user = this.props.user;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'dashboard-view' },\n        this.state.serviceDescription.show ? _react2.default.createElement(_descriptionModal2.default, {\n          rect: this.state.serviceDescription.rect,\n          description: utils.serviceDescriptions[this.state.serviceDescription.service]\n        }) : null,\n        _react2.default.createElement(\n          'ul',\n          null,\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/' },\n              'Home'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'h2',\n          { className: 'greeting' },\n          'Hi ',\n          user.first_name,\n          '!'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'accounts' },\n          _react2.default.createElement(\n            'h3',\n            null,\n            'Accounts'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'content ' + contentClass },\n            this.state.loading ? _react2.default.createElement(_spinner2.default, null) : _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'ul',\n                null,\n                Object.keys(this.state.accounts).map(function (account, index) {\n                  var Component = serviceItems[account];\n                  var accountData = _this3.state.accounts[account];\n                  return _react2.default.createElement(Component, {\n                    key: index,\n                    service: account,\n                    accounts: accountData,\n                    expandedInvestments: _this3.state.expandedInvestments,\n                    overServiceDescription: _this3.overServiceDescription,\n                    hideServiceDescription: _this3.hideServiceDescription,\n                    toggleInvestmentItem: _this3.toggleInvestmentItem\n                  });\n                })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'total' },\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Total: '\n                  ),\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'amount' },\n                    '$',\n                    this.state.investmentsTotal\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nexports.default = Dashboard;\n\n//# sourceURL=webpack:///./views/components/dashboard.jsx?");

/***/ }),

/***/ "./views/components/descriptionModal.jsx":
/*!***********************************************!*\
  !*** ./views/components/descriptionModal.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DescriptionModal = function DescriptionModal(_ref) {\n  var rect = _ref.rect,\n      description = _ref.description;\n\n  var topPadding = 20;\n  var leftPadding = 15;\n  var modalStyle = {\n    top: rect.top + topPadding + 'px',\n    left: rect.left + rect.width + leftPadding + 'px'\n  };\n  return _react2.default.createElement(\n    'div',\n    { className: 'description-modal', style: modalStyle },\n    _react2.default.createElement('div', { className: 'point-shadow' }),\n    _react2.default.createElement('div', { className: 'point' }),\n    description\n  );\n};\n\nexports.default = DescriptionModal;\n\n//# sourceURL=webpack:///./views/components/descriptionModal.jsx?");

/***/ }),

/***/ "./views/components/robinhoodItem.jsx":
/*!********************************************!*\
  !*** ./views/components/robinhoodItem.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _utils = __webpack_require__(/*! shared/utils.js */ \"./shared/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar RobinhoodItem = function RobinhoodItem(_ref) {\n  var positions = _ref.accounts,\n      expandedInvestments = _ref.expandedInvestments,\n      props = _objectWithoutProperties(_ref, ['accounts', 'expandedInvestments']);\n\n  var robinhoodUrl = 'https://www.robinhood.com/';\n  var titleElement = null;\n  var overServiceDescription = function overServiceDescription() {\n    var rect = titleElement.getBoundingClientRect();\n    props.overServiceDescription(rect, props.service);\n  };\n\n  var toggleInvestmentItem = function toggleInvestmentItem(investment) {\n    return function () {\n      props.toggleInvestmentItem(investment);\n    };\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'service-item' },\n    _react2.default.createElement(\n      'a',\n      { className: 'service-title',\n        href: robinhoodUrl,\n        ref: function ref(component) {\n          return titleElement = component;\n        },\n        onMouseEnter: overServiceDescription,\n        onMouseLeave: props.hideServiceDescription\n      },\n      props.service\n    ),\n    positions.map(function (position, index) {\n      return _react2.default.createElement(\n        'div',\n        { key: index, className: 'investment-item ' + (expandedInvestments.includes(position.symbol) ? 'expanded' : '') },\n        _react2.default.createElement(\n          'p',\n          { className: 'toggle', onClick: toggleInvestmentItem(position.symbol) },\n          _react2.default.createElement('span', { className: 'arrow' }),\n          position.name,\n          '(',\n          position.symbol,\n          ')',\n          _react2.default.createElement(\n            'span',\n            { className: 'amount' },\n            '$',\n            Number(position.last_trade_price).toFixed(2)\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'investment-details' },\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              null,\n              'Shares: '\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              Number(position.quantity).toFixed(3)\n            )\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              null,\n              'Purchase price: '\n            ),\n            _react2.default.createElement(\n              'span',\n              null,\n              '$',\n              Number(position.average_buy_price).toFixed(2)\n            )\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = RobinhoodItem;\n\n//# sourceURL=webpack:///./views/components/robinhoodItem.jsx?");

/***/ }),

/***/ "./views/components/spinner.jsx":
/*!**************************************!*\
  !*** ./views/components/spinner.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Spinner = function Spinner(_ref) {\n  var accounts = _ref.accounts;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'spinner' },\n    _react2.default.createElement('div', null)\n  );\n};\n\nexports.default = Spinner;\n\n//# sourceURL=webpack:///./views/components/spinner.jsx?");

/***/ }),

/***/ "./views/components/webRTCPlayground.jsx":
/*!***********************************************!*\
  !*** ./views/components/webRTCPlayground.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WebRTCPlayground = function (_Component) {\n  _inherits(WebRTCPlayground, _Component);\n\n  function WebRTCPlayground(props) {\n    _classCallCheck(this, WebRTCPlayground);\n\n    var _this = _possibleConstructorReturn(this, (WebRTCPlayground.__proto__ || Object.getPrototypeOf(WebRTCPlayground)).call(this, props));\n\n    _this.state = {\n      video: null\n    };\n    return _this;\n  }\n\n  _createClass(WebRTCPlayground, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var successCallback = function successCallback(stream) {\n        var video = _this2.state.video;\n        var videoTracks = stream.getVideoTracks();\n        console.log('Using video device: ' + videoTracks[0].label);\n        video.srcObject = stream;\n        var newState = Object.assign({}, _this2.state, { video: video });\n        _this2.setState(newState);\n      };\n\n      function errorCallback(err) {\n        console.log(err);\n      }\n\n      navigator.mediaDevices.getUserMedia({\n        video: true\n      }).then(successCallback).catch(errorCallback);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var getVideoReference = function getVideoReference(component) {\n        if (_this3.state.video) return;\n        var newState = Object.assign({}, _this3.state, {\n          video: component\n        });\n        _this3.setState(newState);\n      };\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'webrtc-view' },\n        _react2.default.createElement('video', { autoPlay: true, ref: getVideoReference }),\n        'Hello Web RTC!!!!'\n      );\n    }\n  }]);\n\n  return WebRTCPlayground;\n}(_react.Component);\n\nexports.default = WebRTCPlayground;\n\n//# sourceURL=webpack:///./views/components/webRTCPlayground.jsx?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi babel-polyfill ./server/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "coinbase":
/*!***************************!*\
  !*** external "coinbase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"coinbase\");\n\n//# sourceURL=webpack:///external_%22coinbase%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });