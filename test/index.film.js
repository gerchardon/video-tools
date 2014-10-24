/*jslint node: true, expr: true */
"use strict";

var FILMS = [
    'Men In Black.avi'
];

var R_FILMS = [
    {}
];

var mocha = require('mocha');
var should = require('should');
var tools = require('../');

mocha.describe('tools.films', function(){
    mocha.it('isFilm', function(done){
        FILMS.forEach(function (f) {
            tools.isFilm(f).should.eql(true);
        });
        done();
    });
    mocha.it('info', function(done){
        FILMS.forEach(function (f, i){
            should(tools.info(f)).not.ok;
        });
        done();
    });
});
