"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_data_source_1 = require("./app-data-source");
app_data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err.message);
});
