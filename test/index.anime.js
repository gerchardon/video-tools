/*jslint node: true */
"use strict";

var mocha = require('mocha');
var should = require('should');

var tools = require('../');

var ANIMES = [
    '[HorribleSubs] Hunter X Hunter - 104 [720p].mkv'
];

mocha.describe('tools.anime', function(){
    mocha.it('isAnime', function(done) {
        ANIMES.forEach(function(a){
            tools.isAnime(a).should.eql(true);
        });
        done();
    });
});
