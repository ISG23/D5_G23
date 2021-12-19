const basicInfo = require('./basicInfo');
const servers = require("./servers");
const components = require("./components");
const api = require("./api")

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...api
};