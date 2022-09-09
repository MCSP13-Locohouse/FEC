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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ propertiesHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL);\nconsole.log(process.env);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function propertiesHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const properties = await sql`\n      SELECT * FROM properties`;\n            res.status(200).json({\n                properties\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydGllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVoQ0EsMENBQWEsRUFBRSxDQUFDO0FBQ2hCLE1BQU0sRUFBRUcsaUJBQWlCLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRztBQUN6RCxNQUFNQyxHQUFHLEdBQUdQLG9EQUFRLENBQUNLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixpQkFBaUIsQ0FBQztBQUNuRE0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7QUFDekIsMkRBQTJEO0FBRTVDLGVBQWVJLGlCQUFpQixDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4RCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsR0FBRyxNQUFNUCxHQUFHLENBQUM7OEJBQ0wsQ0FBQztZQUN6QkssR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUYsVUFBVTthQUFFLENBQUMsQ0FBQztTQUN0QyxDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaVCxPQUFPLENBQUNVLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUcsR0FBRyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztTQUM5RDtLQUNGLE1BQU07UUFDTFAsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRyxHQUFHLEVBQUUsZUFBZTtTQUFFLENBQUMsQ0FBQztLQUNoRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVjLy4vcGFnZXMvYXBpL3Byb3BlcnRpZXMuanM/YjkzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcblxuZG90ZW52LmNvbmZpZygpO1xuY29uc3QgeyBEQl9DT05ORUNUSU9OX1VSTCwgUE9SVCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuY29uc3Qgc3FsID0gcG9zdGdyZXMocHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTl9VUkwpO1xuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuLy8gcG9zdGdyZXMoXCJwb3N0Z3JlczovL3VzZXI6cGFzc3dvcmRAaG9zdDpwb3J0L2RhdGFiYXNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcm9wZXJ0aWVzSGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSBwcm9wZXJ0aWVzYDtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvcGVydGllcyB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJNZXNzZWQgdXAgb24gb3VyIGVuZFwiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJZb3UgbWVzc2VkIHVwXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJwb3N0Z3JlcyIsImNvbmZpZyIsIkRCX0NPTk5FQ1RJT05fVVJMIiwiUE9SVCIsIk5PREVfRU5WIiwicHJvY2VzcyIsImVudiIsInNxbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wZXJ0aWVzSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb3BlcnRpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/properties.js\n");

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