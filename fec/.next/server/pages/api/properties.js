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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ propertiesHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL,  false ? 0 : {});\n// postgres(\"postgres://user:password@host:port/database\");\nasync function propertiesHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const properties = await sql`\r\n      SELECT * FROM properties`;\n            res.status(200).json({\n                properties\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydGllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVoQ0EsMENBQWEsRUFBRSxDQUFDO0FBQ2hCLE1BQU0sRUFBRUcsaUJBQWlCLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRztBQUN6RCxNQUFNQyxHQUFHLEdBQUdQLG9EQUFRLENBQ2xCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osaUJBQWlCLEVBQzdCRyxNQUFxQyxHQUNqQyxDQUdDLEdBQ0QsRUFBRSxDQUNQO0FBRUQsMkRBQTJEO0FBRTVDLGVBQWVNLGlCQUFpQixDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4RCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsR0FBRyxNQUFNUixHQUFHLENBQUM7WUFFN0JNLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJO2dCQUFHRixVQUFVO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDLENBQUM7WUFDQUksT0FBTyxDQUFDQztZQUNSLE9BQU9QLEdBQUcsQ0FBQ0csTUFBTSxDQUFDO2dCQUFZSyxHQUFHLEVBQUU7YUFBd0IsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7UUFDQ1IsR0FBRyxDQUFDRztZQUFtQkssR0FBRyxFQUFFO1NBQWlCLENBQUMsQ0FBQztLQUNoRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVjLy4vcGFnZXMvYXBpL3Byb3BlcnRpZXMuanM/YjkzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuaW1wb3J0IHBvc3RncmVzIGZyb20gXCJwb3N0Z3Jlc1wiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCB7IERCX0NPTk5FQ1RJT05fVVJMLCBQT1JULCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IHNxbCA9IHBvc3RncmVzKFxyXG4gIHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT05fVVJMLFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyB7XHJcbiAgICAgICAgc3NsOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfSxcclxuICAgICAgICBtYXhfbGlmZXRpbWU6IDYwICogMzAsXHJcbiAgICAgIH1cclxuICAgIDoge31cclxuKTtcclxuXHJcbi8vIHBvc3RncmVzKFwicG9zdGdyZXM6Ly91c2VyOnBhc3N3b3JkQGhvc3Q6cG9ydC9kYXRhYmFzZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByb3BlcnRpZXNIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBhd2FpdCBzcWxgXHJcbiAgICAgIFNFTEVDVCAqIEZST00gcHJvcGVydGllc2A7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvcGVydGllcyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJNZXNzZWQgdXAgb24gb3VyIGVuZFwiIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJZb3UgbWVzc2VkIHVwXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJwb3N0Z3JlcyIsImNvbmZpZyIsIkRCX0NPTk5FQ1RJT05fVVJMIiwiUE9SVCIsIk5PREVfRU5WIiwicHJvY2VzcyIsImVudiIsInNxbCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsIm1heF9saWZldGltZSIsInByb3BlcnRpZXNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvcGVydGllcyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/properties.js\n");

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