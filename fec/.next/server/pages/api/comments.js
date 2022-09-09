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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentsHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function commentsHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const comments = await sql`\n      SELECT * FROM comments`;\n            res.status(200).json({\n                comments\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFFaENBLDBDQUFhLEVBQUUsQ0FBQztBQUNoQixNQUFNLEVBQUVHLGlCQUFpQixHQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFDekQsTUFBTUMsR0FBRyxHQUFHUCxvREFBUSxDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osaUJBQWlCLENBQUM7QUFFbkQsMkRBQTJEO0FBRTVDLGVBQWVNLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEQsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUwsR0FBRyxDQUFDOzRCQUNMLENBQUM7WUFDdkJHLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVGLFFBQVE7YUFBRSxDQUFDLENBQUM7U0FDcEMsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVJLEdBQUcsRUFBRSxzQkFBc0I7YUFBRSxDQUFDLENBQUM7U0FDOUQ7S0FDRixNQUFNO1FBQ0xSLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUksR0FBRyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7S0FDaEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlYy8uL3BhZ2VzL2FwaS9jb21tZW50cy5qcz8yNWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHBvc3RncmVzIGZyb20gXCJwb3N0Z3Jlc1wiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCB7IERCX0NPTk5FQ1RJT05fVVJMLCBQT1JULCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5jb25zdCBzcWwgPSBwb3N0Z3Jlcyhwcm9jZXNzLmVudi5EQl9DT05ORUNUSU9OX1VSTCk7XG5cbi8vIHBvc3RncmVzKFwicG9zdGdyZXM6Ly91c2VyOnBhc3N3b3JkQGhvc3Q6cG9ydC9kYXRhYmFzZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY29tbWVudHNIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgc3FsYFxuICAgICAgU0VMRUNUICogRlJPTSBjb21tZW50c2A7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvbW1lbnRzIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIk1lc3NlZCB1cCBvbiBvdXIgZW5kXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbXNnOiBcIllvdSBtZXNzZWQgdXBcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRvdGVudiIsInBvc3RncmVzIiwiY29uZmlnIiwiREJfQ09OTkVDVElPTl9VUkwiLCJQT1JUIiwiTk9ERV9FTlYiLCJwcm9jZXNzIiwiZW52Iiwic3FsIiwiY29tbWVudHNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29tbWVudHMiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.js\n");

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