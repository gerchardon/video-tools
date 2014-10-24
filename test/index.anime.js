/*jslint node: true, expr: true */
"use strict";

var mocha = require('mocha');
var should = require('should');

var tools = require('../');

var ANIMES = [
    '[HorribleSubs] Hunter X Hunter - 104 [720p].mkv'
];
var R_ANIMES = [
    {team: 'HorribleSubs', type: 'ANIME', episodes: [104], serie: 'Hunter X Hunter'}
];

mocha.describe('tools.anime', function(){
    mocha.it('isAnime', function(done) {
        ANIMES.forEach(function(a){
            tools.isAnime(a).should.eql(true);
        });
        done();
    });
    mocha.it('info', function(done) {
        ANIMES.forEach(function(a, i){
            var info = tools.info(a);
            info.should.eql(R_ANIMES[i]);
        });
        done();
    });
});
