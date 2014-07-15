/*jslint node: true */
"use strict";

var FILMS = [
    'Men In Black.avi'
];

var mocha = require('mocha');
require('should');
var tools = require('../');

mocha.describe('tools.films', function(){
    mocha.it('isFilm', function(done){
        FILMS.forEach(function (f) {
            tools.isFilm(f).should.eql(true);
        });
        done();
    });
});
