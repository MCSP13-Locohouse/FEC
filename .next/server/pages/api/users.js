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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usersHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL);\n// const sql = postgres(process.env.DATABASE_URL);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function usersHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const users = await sql`\n      SELECT * FROM customers`;\n            res.status(200).json({\n                users\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFFaENBLDBDQUFhLEVBQUUsQ0FBQztBQUNoQixNQUFNLEVBQUVHLGlCQUFpQixHQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFDekQsTUFBTUMsR0FBRyxHQUFHUCxvREFBUSxDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osaUJBQWlCLENBQUM7QUFDbkQsa0RBQWtEO0FBQ2xELDJEQUEyRDtBQUU1QyxlQUFlTSxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ25ELElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsS0FBSyxHQUFHLE1BQU1MLEdBQUcsQ0FBQzs2QkFDRCxDQUFDO1lBQ3hCRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRixLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQ2pDLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSSxHQUFHLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1NBQzlEO0tBQ0YsTUFBTTtRQUNMUixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLEdBQUcsRUFBRSxlQUFlO1NBQUUsQ0FBQyxDQUFDO0tBQ2hEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9wYWdlcy9hcGkvdXNlcnMuanM/NDlmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcblxuZG90ZW52LmNvbmZpZygpO1xuY29uc3QgeyBEQl9DT05ORUNUSU9OX1VSTCwgUE9SVCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuY29uc3Qgc3FsID0gcG9zdGdyZXMocHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTl9VUkwpO1xuLy8gY29uc3Qgc3FsID0gcG9zdGdyZXMocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbi8vIHBvc3RncmVzKFwicG9zdGdyZXM6Ly91c2VyOnBhc3N3b3JkQGhvc3Q6cG9ydC9kYXRhYmFzZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXNlcnNIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSBjdXN0b21lcnNgO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VycyB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJNZXNzZWQgdXAgb24gb3VyIGVuZFwiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJZb3UgbWVzc2VkIHVwXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJwb3N0Z3JlcyIsImNvbmZpZyIsIkRCX0NPTk5FQ1RJT05fVVJMIiwiUE9SVCIsIk5PREVfRU5WIiwicHJvY2VzcyIsImVudiIsInNxbCIsInVzZXJzSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJzIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();