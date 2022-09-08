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

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reservationsHandler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postgres */ \"postgres\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([postgres__WEBPACK_IMPORTED_MODULE_1__]);\npostgres__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nconst { DB_CONNECTION_URL , PORT , NODE_ENV  } = process.env;\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.DB_CONNECTION_URL);\n// postgres(\"postgres://user:password@host:port/database\");\nasync function reservationsHandler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const reservations = await sql`\n      SELECT * FROM customers`;\n            res.status(200).json({\n                reservations\n            });\n        } catch (err) {\n            console.error(err);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else if (req.method === \"POST\") {\n        try {\n            console.log(req.body, \"in try post\");\n            const { prop_id , first_name , last_name , guest_num , startdate , enddate  } = req.body;\n            const reservationMaker = await sql`\n  INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES (${prop_id}, ${first_name}, ${last_name}, ${guest_num}, ${startdate}, ${enddate}) RETURNING *`;\n            res.status(200).json({\n                reservationMaker\n            });\n        } catch (err1) {\n            console.error(err1);\n            return res.status(500).json({\n                msg: \"Messed up on our end\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            msg: \"You messed up\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzZXJ2YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUVJO0FBRWhDQSwwQ0FBYSxFQUFFLENBQUM7QUFDaEIsTUFBTSxFQUFFRyxpQkFBaUIsR0FBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUUsR0FBR0MsT0FBTyxDQUFDQyxHQUFHO0FBQ3pELE1BQU1DLEdBQUcsR0FBR1Asb0RBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNKLGlCQUFpQixDQUFDO0FBQ25ELDJEQUEyRDtBQUU1QyxlQUFlTSxtQkFBbUIsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDMUQsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxZQUFZLEdBQUcsTUFBTUwsR0FBRyxDQUFDOzZCQUNSLENBQUM7WUFDeEJHLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVGLFlBQVk7YUFBRSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVJLEdBQUcsRUFBRSxzQkFBc0I7YUFBRSxDQUFDLENBQUM7U0FDOUQ7S0FDRixNQUFNLElBQUlULEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNoQyxJQUFJO1lBQ0ZLLE9BQU8sQ0FBQ0csR0FBRyxDQUFDVixHQUFHLENBQUNXLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNyQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsVUFBVSxHQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFQyxPQUFPLEdBQUUsR0FDckVqQixHQUFHLENBQUNXLElBQUk7WUFDVixNQUFNTyxnQkFBZ0IsR0FBRyxNQUFNcEIsR0FBRyxDQUFDO21HQUMwRCxFQUFFYyxPQUFPLENBQUMsRUFBRSxFQUFFQyxVQUFVLENBQUMsRUFBRSxFQUFFQyxTQUFTLENBQUMsRUFBRSxFQUFFQyxTQUFTLENBQUMsRUFBRSxFQUFFQyxTQUFTLENBQUMsRUFBRSxFQUFFQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzFMaEIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRWEsZ0JBQWdCO2FBQUUsQ0FBQyxDQUFDO1NBQzVDLENBQUMsT0FBT1osSUFBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixJQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSSxHQUFHLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1NBQzlEO0tBQ0YsTUFBTTtRQUNMUixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLEdBQUcsRUFBRSxlQUFlO1NBQUUsQ0FBQyxDQUFDO0tBQ2hEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWMvLi9wYWdlcy9hcGkvcmVzZXJ2YXRpb25zLmpzPzE4ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcblxuZG90ZW52LmNvbmZpZygpO1xuY29uc3QgeyBEQl9DT05ORUNUSU9OX1VSTCwgUE9SVCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuY29uc3Qgc3FsID0gcG9zdGdyZXMocHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTl9VUkwpO1xuLy8gcG9zdGdyZXMoXCJwb3N0Z3JlczovL3VzZXI6cGFzc3dvcmRAaG9zdDpwb3J0L2RhdGFiYXNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXNlcnZhdGlvbnNIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGF3YWl0IHNxbGBcbiAgICAgIFNFTEVDVCAqIEZST00gY3VzdG9tZXJzYDtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzZXJ2YXRpb25zIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIk1lc3NlZCB1cCBvbiBvdXIgZW5kXCIgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LCBcImluIHRyeSBwb3N0XCIpO1xuICAgICAgY29uc3QgeyBwcm9wX2lkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGd1ZXN0X251bSwgc3RhcnRkYXRlLCBlbmRkYXRlIH0gPVxuICAgICAgICByZXEuYm9keTtcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uTWFrZXIgPSBhd2FpdCBzcWxgXG4gIElOU0VSVCBJTlRPIHJlc2VydmF0aW9ucyAocHJvcF9pZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBndWVzdF9udW0sIHN0YXJ0ZGF0ZSwgZW5kZGF0ZSkgVkFMVUVTICgke3Byb3BfaWR9LCAke2ZpcnN0X25hbWV9LCAke2xhc3RfbmFtZX0sICR7Z3Vlc3RfbnVtfSwgJHtzdGFydGRhdGV9LCAke2VuZGRhdGV9KSBSRVRVUk5JTkcgKmA7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc2VydmF0aW9uTWFrZXIgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiTWVzc2VkIHVwIG9uIG91ciBlbmRcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtc2c6IFwiWW91IG1lc3NlZCB1cFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZG90ZW52IiwicG9zdGdyZXMiLCJjb25maWciLCJEQl9DT05ORUNUSU9OX1VSTCIsIlBPUlQiLCJOT0RFX0VOViIsInByb2Nlc3MiLCJlbnYiLCJzcWwiLCJyZXNlcnZhdGlvbnNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzZXJ2YXRpb25zIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1zZyIsImxvZyIsImJvZHkiLCJwcm9wX2lkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImd1ZXN0X251bSIsInN0YXJ0ZGF0ZSIsImVuZGRhdGUiLCJyZXNlcnZhdGlvbk1ha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/reservations.js\n");

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