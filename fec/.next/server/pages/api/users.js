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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usersHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL,  false ? 0 : {});\n// const sql = postgres(process.env.DATABASE_URL);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function usersHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const users = await sql`\r\n      SELECT * FROM customers`;\n            res.status(200).json({\n                users\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFFaENBLDBDQUFhLEVBQUUsQ0FBQztBQUNoQixNQUFNLEVBQUVHLGlCQUFpQixHQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFDekQsTUFBTUMsR0FBRyxHQUFHUCxvREFBUSxDQUNsQkssT0FBTyxDQUFDQyxHQUFHLENBQUNKLGlCQUFpQixFQUM3QkcsTUFBcUMsR0FDakMsQ0FHQyxHQUNELEVBQUUsQ0FDUDtBQUNELGtEQUFrRDtBQUNsRCwyREFBMkQ7QUFFNUMsZUFBZU0sWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNUixHQUFHLENBQUM7WUFFeEJNLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQztnQkFBT0YsS0FBSzthQUFFLENBQUMsQ0FBQztTQUNqQyxDQUFDO1lBQ0FJLE9BQU8sQ0FBQ0M7WUFDUixPQUFPUCxHQUFHLENBQUNHLE1BQU0sQ0FBQztnQkFBWUssR0FBRyxFQUFFO2FBQXdCLENBQUMsQ0FBQztTQUM5RDtLQUNGO1FBQ0NSLEdBQUcsQ0FBQ0c7WUFBbUJLLEdBQUcsRUFBRTtTQUFpQixDQUFDLENBQUM7S0FDaEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlYy8uL3BhZ2VzL2FwaS91c2Vycy5qcz80OWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgcG9zdGdyZXMgZnJvbSBcInBvc3RncmVzXCI7XHJcblxyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IHsgREJfQ09OTkVDVElPTl9VUkwsIFBPUlQsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3Qgc3FsID0gcG9zdGdyZXMoXHJcbiAgcHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTl9VUkwsXHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICA/IHtcclxuICAgICAgICBzc2w6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9LFxyXG4gICAgICAgIG1heF9saWZldGltZTogNjAgKiAzMCxcclxuICAgICAgfVxyXG4gICAgOiB7fVxyXG4pO1xyXG4vLyBjb25zdCBzcWwgPSBwb3N0Z3Jlcyhwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xyXG4vLyBwb3N0Z3JlcyhcInBvc3RncmVzOi8vdXNlcjpwYXNzd29yZEBob3N0OnBvcnQvZGF0YWJhc2VcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1c2Vyc0hhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBzcWxgXHJcbiAgICAgIFNFTEVDVCAqIEZST00gY3VzdG9tZXJzYDtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VycyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJNZXNzZWQgdXAgb24gb3VyIGVuZFwiIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJZb3UgbWVzc2VkIHVwXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJwb3N0Z3JlcyIsImNvbmZpZyIsIkRCX0NPTk5FQ1RJT05fVVJMIiwiUE9SVCIsIk5PREVfRU5WIiwicHJvY2VzcyIsImVudiIsInNxbCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsIm1heF9saWZldGltZSIsInVzZXJzSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJzIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

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