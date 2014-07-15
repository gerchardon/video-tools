/*jslint node: true, expr: true */
"use strict";

var mocha = require('mocha');
var should = require('should');

var tools = require('../');
mocha.describe('index.subs', function() {
    mocha.it('no video', function (done) {
        should(tools.subs('todo.txt')).not.be.ok;
        done();
    });
    mocha.it('movie', function (done) {
        tools.subs('sample.avi').should.eql(['sample.srt','sample.eng.srt']);
        done();
    });
    mocha.it('multi ext', function (done) {
        tools.subs('sample.mp4.avi').should.eql(['sample.mp4.srt', 'sample.mp4.eng.srt']);
        tools.subs('sample.avi.final.avi').should.eql(['sample.avi.final.srt', 'sample.avi.final.eng.srt']);
        done();
    });
});
