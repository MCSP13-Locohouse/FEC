"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/properties";
exports.ids = ["pages/api/properties"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "postgres":
/*!***************************!*\
  !*** external "postgres" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("postgres");;

/***/ }),

/***/ "(api)/./pages/api/properties.js":
/*!*********************************!*\
  !*** ./pages/api/properties.js ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ propertiesHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function propertiesHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const properties = await sql`\n      SELECT * FROM properties`;\n            res.status(200).json({\n                properties\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydGllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVoQ0EsMENBQWEsRUFBRSxDQUFDO0FBQ2hCLE1BQU0sRUFBRUcsaUJBQWlCLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRztBQUN6RCxNQUFNQyxHQUFHLEdBQUdQLG9EQUFRLENBQUNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixpQkFBaUIsQ0FBQztBQUVuRCwyREFBMkQ7QUFFNUMsZUFBZU0saUJBQWlCLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hELElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsVUFBVSxHQUFHLE1BQU1MLEdBQUcsQ0FBQzs4QkFDTCxDQUFDO1lBQ3pCRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRixVQUFVO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSSxHQUFHLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1NBQzlEO0tBQ0YsTUFBTTtRQUNMUixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLEdBQUcsRUFBRSxlQUFlO1NBQUUsQ0FBQyxDQUFDO0tBQ2hEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9wYWdlcy9hcGkvcHJvcGVydGllcy5qcz9iOTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHBvc3RncmVzIGZyb20gXCJwb3N0Z3Jlc1wiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCB7IERCX0NPTk5FQ1RJT05fVVJMLCBQT1JULCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5jb25zdCBzcWwgPSBwb3N0Z3Jlcyhwcm9jZXNzLmVudi5EQl9DT05ORUNUSU9OX1VSTCk7XG5cbi8vIHBvc3RncmVzKFwicG9zdGdyZXM6Ly91c2VyOnBhc3N3b3JkQGhvc3Q6cG9ydC9kYXRhYmFzZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHJvcGVydGllc0hhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gcHJvcGVydGllc2A7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb3BlcnRpZXMgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiTWVzc2VkIHVwIG9uIG91ciBlbmRcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtc2c6IFwiWW91IG1lc3NlZCB1cFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZG90ZW52IiwicG9zdGdyZXMiLCJjb25maWciLCJEQl9DT05ORUNUSU9OX1VSTCIsIlBPUlQiLCJOT0RFX0VOViIsInByb2Nlc3MiLCJlbnYiLCJzcWwiLCJwcm9wZXJ0aWVzSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb3BlcnRpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/properties.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/properties.js"));
module.exports = __webpack_exports__;

})();