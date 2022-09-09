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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
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

/***/ "(api)/./pages/api/comments.js":
/*!*******************************!*\
  !*** ./pages/api/comments.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentsHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL,  false ? 0 : {});\n// postgres(\"postgres://user:password@host:port/database\");\nasync function commentsHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const comments = await sql`\r\n      SELECT * FROM comments`;\n            res.status(200).json({\n                comments\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFFaENBLDBDQUFhLEVBQUUsQ0FBQztBQUNoQixNQUFNLEVBQUVHLGlCQUFpQixHQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFDekQsTUFBTUMsR0FBRyxHQUFHUCxvREFBUSxDQUNsQkssT0FBTyxDQUFDQyxHQUFHLENBQUNKLGlCQUFpQixFQUM3QkcsTUFBcUMsR0FDakMsQ0FHQyxHQUNELEVBQUUsQ0FDUDtBQUVELDJEQUEyRDtBQUU1QyxlQUFlTSxlQUFlLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RELElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1SLEdBQUcsQ0FBQztZQUUzQk0sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDO2dCQUFPRixRQUFRO2FBQUUsQ0FBQyxDQUFDO1NBQ3BDLENBQUM7WUFDQUksT0FBTyxDQUFDQztZQUNSLE9BQU9QLEdBQUcsQ0FBQ0csTUFBTSxDQUFDO2dCQUFZSyxHQUFHLEVBQUU7YUFBd0IsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7UUFDQ1IsR0FBRyxDQUFDRztZQUFtQkssR0FBRyxFQUFFO1NBQWlCLENBQUMsQ0FBQztLQUNoRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVjLy4vcGFnZXMvYXBpL2NvbW1lbnRzLmpzPzI1YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XHJcbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgeyBEQl9DT05ORUNUSU9OX1VSTCwgUE9SVCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xyXG5jb25zdCBzcWwgPSBwb3N0Z3JlcyhcclxuICBwcm9jZXNzLmVudi5EQl9DT05ORUNUSU9OX1VSTCxcclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgID8ge1xyXG4gICAgICAgIHNzbDogeyByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWF4X2xpZmV0aW1lOiA2MCAqIDMwLFxyXG4gICAgICB9XHJcbiAgICA6IHt9XHJcbik7XHJcblxyXG4vLyBwb3N0Z3JlcyhcInBvc3RncmVzOi8vdXNlcjpwYXNzd29yZEBob3N0OnBvcnQvZGF0YWJhc2VcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb21tZW50c0hhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBzcWxgXHJcbiAgICAgIFNFTEVDVCAqIEZST00gY29tbWVudHNgO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvbW1lbnRzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIk1lc3NlZCB1cCBvbiBvdXIgZW5kXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbXNnOiBcIllvdSBtZXNzZWQgdXBcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvdGVudiIsInBvc3RncmVzIiwiY29uZmlnIiwiREJfQ09OTkVDVElPTl9VUkwiLCJQT1JUIiwiTk9ERV9FTlYiLCJwcm9jZXNzIiwiZW52Iiwic3FsIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwibWF4X2xpZmV0aW1lIiwiY29tbWVudHNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29tbWVudHMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.js"));
module.exports = __webpack_exports__;

})();