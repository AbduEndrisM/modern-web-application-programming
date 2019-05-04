
var express = require("express");
var app = express();

app.set("env", "development");
app.set("env", "test");
app.set("env", "stage");
app.set("env", "preview");
app.set("env", "production");

// app.set("trust proxy", true);
app.enable("trust proxy");
app.enable("case sensitive routing");
app.disable("x-powered-by");





console.log(app.get("env"));

























 
// // requires
// const _ = require('lodash');

// // module variables
// const config = require('./config.json');
// const defaultConfig = config.development;
// const environment = process.env.NODE_ENV || 'development';
// const environmentConfig = config[environment];
// const finalConfig = _.merge(defaultConfig, environmentConfig);

// // as a best practice
// // all global variables should be referenced via global. syntax
// // and their names should always begin with g
// global.gConfig = finalConfig;

// // log global.gConfig
// console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);