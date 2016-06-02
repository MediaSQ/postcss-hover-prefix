'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-class-prefix', classPrefix);

function classPrefix(prefix, options) {
  options = options || {};

  prefix = '.' + prefix + ' ';

  return function(root) {

    root.walkRules(function (rule) {
      if (!rule.selectors) {
        return rule;
      }

      rule.selectors = rule.selectors.map(function(selector) {
        var myPrefix = /:hover/.exec(selector) ? prefix : '';

        return myPrefix + selector;

      });
    });
  };
}
