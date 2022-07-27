"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 9993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const express = __webpack_require__(6860);
    const cors = __webpack_require__(3582);
    const app = express();
    app.use(cors());
    app.use(express.json());
    const { google  } = __webpack_require__(9993);
    const { OAuth2  } = google.auth;
    const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
    const oauth2Client = new OAuth2(process.env.GMAIL_CLIENTID, process.env.GMAIL_CLIENTSECRET, OAUTH_PLAYGROUND);
    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_RFRESHTOKEN
    });
    const accessToken = oauth2Client.getAccessToken();
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.GMAIL_ACC,
            clientId: process.env.GMAIL_CLIENTID,
            clientSecret: process.env.GMAIL_CLIENTSECRET,
            refreshToken: process.env.GMAIL_RFRESHTOKEN,
            accessToken: process.env.GMAIL_ACCESSTOKEN,
            accessToken
        }
    });
    const mailData = {
        from: req.body.email,
        to: "strongconcrete.info@gmail.com",
        subject: `Mensaje Desde Strong Concrete:  ${req.body.name}` + ` ${req.body.apellido}`,
        text: req.body.message + " | Numero telefono: " + req.body.telefono + " | Enviado De: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Numero telefono: ${req.body.telefono}</p><p>Enviado desde el correo: ${req.body.email}</p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("Email Enviado");
            res.send("sucesso");
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3283));
module.exports = __webpack_exports__;

})();