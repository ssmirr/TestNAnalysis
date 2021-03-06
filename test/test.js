var main = require("../index.js");

describe("unit tests", function() {

    it("doesn't crash", function() {
       main.inc(undefined);
    });

});
