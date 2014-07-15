/*jslint node: true */
"use strict";

var mocha = require('mocha');
var should = require('should');

var tools = require('../');

mocha.describe('test extension', function () {
    mocha.it('nameWithoutExtension', function (done) {
        tools.nameWithoutExtension('test.avi').should.eql('test');
        tools.nameWithoutExtension('test.mp4').should.eql('test');
        tools.nameWithoutExtension('test.mkv').should.eql('test');
        tools.nameWithoutExtension('test.mov').should.eql('test');
        tools.nameWithoutExtension('testavi').should.eql('testavi');
        done();
    });
    mocha.it('multi extension in name', function (done) {
        tools.nameWithoutExtension('test.avi.mp4').should.eql('test.avi');
        tools.nameWithoutExtension('test.avi.final.avi').should.eql('test.avi.final');
        done();
    });
    mocha.it('isMovie', function(done) {
        tools.isMovie('test.avi').should.eql(true);
        tools.isMovie('test.mp4').should.eql(true);
        tools.isMovie('test.mov').should.eql(true);
        tools.isMovie('test.mkv').should.eql(true);
        done();
    });
});
