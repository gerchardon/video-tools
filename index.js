/*jslint node: true */
"use strict";

var REGS = [{
    regex: /^(.+)[\. ]S(\d{2}) - (\d{1,2})-(\d{1,2})\[(.+)\]$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3, 4], team: 5
},{
    regex: /^(.+)[\. ]S(\d{2}) - (\d{1,2}).*-(.+)\[.*\]$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: 4
},{
    regex: /^(.+)[\. ]S(\d{2}) - (\d{1,2}).*\[(.+)\]$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: 4
},{
    regex: /^(.+)[\. ][Ss](\d{2})[Ee](\d{1,2}).*-(.+)\..*$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: 4
},{
    regex: /^(.+)[\. ][Ss](\d{2})[Ee](\d{1,2}).*-(.+)$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: 4
},{
    regex: /^(.+)[\. ][Ss](\d{1,2}) - (\d{1,2})$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: -1
},{
    regex: /^(.+)[\. ](\d{1,2})[xX](\d{1,2}).*-(.+)$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: 4
},{
    regex: /^(.+)[\. ](\d{1,2})[xX](\d{1,2}).*$/,
    type: 'SERIE',
    serie: 1, season: 2, episodes: [3], team: -1
},{
    regex: /^\[(.+)\] (.+) - (\d+).*$/,
    type: 'ANIME',
    serie: 2, season: -1, episodes: [3], team: 1
},{
    regex: /^(.+) - (\d+).*\[(.+)\]$/,
    type: 'ANIME',
    serie: 1, season: -1, episodes: [2], team: 3
}];

var EXTS = [ /\.mp4$/, /\.avi$/, /\.mkv$/, /\.mov$/ ];
var SUB_EXTS = [ '.srt', '.eng.srt'];

/**
 * Name without extension.
 * @param {string} name Filename to extract.
 * @return {string} Filename without extension.
 */
exports.nameWithoutExtension = function (name) {
    for(var i=0; i < EXTS.length; i++) {
        if(name.match(EXTS[i])){
            return name.replace(EXTS[i], "");
        }
    }
    return name;
};

/**
 * True if is a Serie.
 * @param {string} name Filename to test.
 * @return {boolean}
 */
exports.isSerie = function (name) {
  var temp = exports.info(name);
  if (temp !== null) {
    return "SERIE" === exports.info(name).type;
  }
  return false;
};

exports.isAnime = function (name) {
  var temp = exports.info(name);
  if (temp !== null) {
    return "ANIME" === exports.info(name).type;
  }
  return false;
};
exports.isFilm = function (name) {
  var temp = exports.info(name);
  if (temp !== null) {
    return "FILM" === exports.info(name).type;
  }
  return true;
};

exports.isMovie = function (name) {
    var i;
    for (i = 0; i < EXTS.length; i++) {
        if(name.match(EXTS[i])){
            return true;
        }
    }
    return false;
};

exports.info = function (name) {
  var temp, i, ret, info;
  if (!this.isMovie(name)) {
    return null;
  }

  temp = name.replace(/_/g, " ");
  temp = this.nameWithoutExtension(temp);

  function addInfoEpisodes(n) {
    info.episodes.push(parseInt(ret[n], 10));
  }
  for (i = 0; i < REGS.length; i++) {
    ret = temp.match(REGS[i].regex);
    if (ret !== null) {
      info = {};
      info.type = REGS[i].type;
      info.serie = ret[REGS[i].serie].replace(/\./g, ' ');
      if (REGS[i].season > 0) {
        info.season = parseInt(ret[REGS[i].season], 10);
      }
      if (REGS[i].episodes !== null) {
        info.episodes = [];
        REGS[i].episodes.forEach(addInfoEpisodes);
      }
      info.team = ret[REGS[i].team];
      return info;
    }
  }
  return null;
};

exports.subs = function (fullName) {
    var temp, ret;
    if (!this.isMovie(fullName)) {
        return null;
    }
    temp = this.nameWithoutExtension(fullName);
    ret = [];
    SUB_EXTS.forEach(function (s) {
        ret.push(temp + s);
    });
    return ret;
};
