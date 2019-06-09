var R = require("r-script");

var out = R("ex-sync.R").data("Hello", 20).callSync();