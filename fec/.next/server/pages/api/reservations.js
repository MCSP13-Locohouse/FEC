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
exports.id = "pages/api/reservations";
exports.ids = ["pages/api/reservations"];
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

/***/ "(api)/./pages/api/reservations.js":
/*!***********************************!*\
  !*** ./pages/api/reservations.js ***!
  \***********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reservationsHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL,  false ? 0 : {});\n// postgres(\"postgres://user:password@host:port/database\");\nasync function reservationsHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const reservations = await sql`\r\n      SELECT * FROM customers`;\n            res.status(200).json({\n                reservations\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else if (req.method === \"POST\") {\n        try {\n            const { prop_id , first_name , last_name , guest_num , startdate , enddate  } = req.body;\n            const reservationMaker = await sql`\r\n  INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES (${prop_id}, ${first_name}, ${last_name}, ${guest_num}, ${startdate}, ${enddate}) RETURNING *`;\n            res.status(200).json({\n                reservationMaker\n            });\n        } catch (err1) {\n            console.error(err1);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzZXJ2YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUVJO0FBRWhDQSwwQ0FBYSxFQUFFLENBQUM7QUFDaEIsTUFBTSxFQUFFRyxpQkFBaUIsR0FBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUUsR0FBR0MsT0FBTyxDQUFDQyxHQUFHO0FBQ3pELE1BQU1DLEdBQUcsR0FBR1Asb0RBQVEsQ0FDbEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixpQkFBaUIsRUFDN0JHLE1BQXFDLEdBQ2pDLENBR0MsR0FDRCxFQUFFLENBQ1A7QUFDRCwyREFBMkQ7QUFFNUMsZUFBZU0sbUJBQW1CLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzFELElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxHQUFHLE1BQU1SLEdBQUcsQ0FBQztZQUUvQk0sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDO2dCQUFPRixZQUFZO2FBQUUsQ0FBQyxDQUFDO1NBQ3hDLENBQUM7WUFDQUksT0FBTyxDQUFDQztZQUNSLE9BQU9QLEdBQUcsQ0FBQ0csTUFBTSxDQUFDO2dCQUFZSyxHQUFHLEVBQUU7YUFBd0IsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7UUFDQyxJQUFJO1lBQ0Y7WUFFQSxNQUFNUSxnQkFBZ0IsR0FBRyxNQUFNdEIsR0FBRyxDQUFDO1lBRW5DTSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFWSxnQkFBZ0I7YUFBRSxDQUFDLENBQUM7U0FDNUMsQ0FBQyxPQUFPWCxJQUFHLEVBQUU7WUFDWkM7WUFDQSxPQUFPTixHQUFHLENBQUNHO2dCQUFtQkssR0FBRyxFQUFFO2FBQXdCLENBQUMsQ0FBQztTQUM5RDtLQUNGLE1BQU07UUFDTFI7WUFBdUJRO1NBQXNCLENBQUMsQ0FBQztLQUNoRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVjLy4vcGFnZXMvYXBpL3Jlc2VydmF0aW9ucy5qcz8xOGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuaW1wb3J0IHBvc3RncmVzIGZyb20gXCJwb3N0Z3Jlc1wiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCB7IERCX0NPTk5FQ1RJT05fVVJMLCBQT1JULCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IHNxbCA9IHBvc3RncmVzKFxyXG4gIHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT05fVVJMLFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyB7XHJcbiAgICAgICAgc3NsOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfSxcclxuICAgICAgICBtYXhfbGlmZXRpbWU6IDYwICogMzAsXHJcbiAgICAgIH1cclxuICAgIDoge31cclxuKTtcclxuLy8gcG9zdGdyZXMoXCJwb3N0Z3JlczovL3VzZXI6cGFzc3dvcmRAaG9zdDpwb3J0L2RhdGFiYXNlXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVzZXJ2YXRpb25zSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBhd2FpdCBzcWxgXHJcbiAgICAgIFNFTEVDVCAqIEZST00gY3VzdG9tZXJzYDtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNlcnZhdGlvbnMgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiTWVzc2VkIHVwIG9uIG91ciBlbmRcIiB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHByb3BfaWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZ3Vlc3RfbnVtLCBzdGFydGRhdGUsIGVuZGRhdGUgfSA9XHJcbiAgICAgICAgcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uTWFrZXIgPSBhd2FpdCBzcWxgXHJcbiAgSU5TRVJUIElOVE8gcmVzZXJ2YXRpb25zIChwcm9wX2lkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGd1ZXN0X251bSwgc3RhcnRkYXRlLCBlbmRkYXRlKSBWQUxVRVMgKCR7cHJvcF9pZH0sICR7Zmlyc3RfbmFtZX0sICR7bGFzdF9uYW1lfSwgJHtndWVzdF9udW19LCAke3N0YXJ0ZGF0ZX0sICR7ZW5kZGF0ZX0pIFJFVFVSTklORyAqYDtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNlcnZhdGlvbk1ha2VyIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIk1lc3NlZCB1cCBvbiBvdXIgZW5kXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbXNnOiBcIllvdSBtZXNzZWQgdXBcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvdGVudiIsInBvc3RncmVzIiwiY29uZmlnIiwiREJfQ09OTkVDVElPTl9VUkwiLCJQT1JUIiwiTk9ERV9FTlYiLCJwcm9jZXNzIiwiZW52Iiwic3FsIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwibWF4X2xpZmV0aW1lIiwicmVzZXJ2YXRpb25zSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc2VydmF0aW9ucyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtc2ciLCJwcm9wX2lkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImd1ZXN0X251bSIsInN0YXJ0ZGF0ZSIsImVuZGRhdGUiLCJib2R5IiwicmVzZXJ2YXRpb25NYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/reservations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/reservations.js"));
module.exports = __webpack_exports__;

})();