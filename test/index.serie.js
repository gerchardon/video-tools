/*jslint node: true */
"use strict";

var SERIES = [
    'Arrows S01 - 02[LOL].avi', 'Sherlock.3x02.The.Sign.Of.Three.HDTV.x264-FoV.mp4',
    'misfits.s05e04.hdtv.x264-tla.mp4', 'Person.of.Interest.S03E08.HDTV.x264-LOL.mp4',
    'NCIS.S11E08.HDTV.x264-LOL.mp4', 'Hero.Corp.1x11.Chez.L\'Habitant.avi',
    'NCIS S05 - 18-19[ASC].avi', '4400 S02 - 01.avi'
];

var mocha = require('mocha');
require('should');
var tools = require('../');

mocha.describe('tools.serie', function() {
    mocha.it('isSerie', function (done) {
        SERIES.forEach(function (s){
            tools.isSerie(s).should.eql(true);
        });
        done();
    });
});
