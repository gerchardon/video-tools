/*jslint node: true */
"use strict";

var SERIES = [
    'Arrows S01 - 02[LOL].avi',
    'Sherlock.3x02.The.Sign.Of.Three.HDTV.x264-FoV.mp4',
    'misfits.s05e04.hdtv.x264-tla.mp4',
    'Person.of.Interest.S03E08.HDTV.x264-LOL.mp4',
    'NCIS.S11E08.HDTV.x264-LOL.mp4',
    'Hero.Corp.1x11.Chez.L\'Habitant.avi',
    'NCIS S05 - 18-19[ASC].avi',
    '4400 S02 - 01.avi'
];

var R_SERIES = [
    {serie: 'Arrows', season: 1, episodes: [2], team: 'LOL', type: 'SERIE'},
    {serie: 'Sherlock', season: 3, episodes: [2], team: 'FoV', type: 'SERIE'},
    {serie: 'misfits', season: 5, episodes: [4], team: 'tla', type: 'SERIE'},
    {serie: 'Person of Interest', season: 3, episodes: [8], team: 'LOL', type: 'SERIE'},
    {serie: 'NCIS', season: 11, episodes: [8], team: 'LOL', type: 'SERIE'},
    {serie: 'Hero Corp', season: 1, episodes: [11], team: null, type: 'SERIE'},
    {serie: 'NCIS', season: 5, episodes: [18,19], team: 'ASC', type: 'SERIE'},
    {serie: '4400', season: 2, episodes: [1], team: null, type: 'SERIE'}
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
    mocha.it('info', function (done){
        SERIES.forEach(function (s, i){
            tools.info(s).should.eql(R_SERIES[i]);
        });
        done();
    });
});
