"use strict";

function counter() {
  var count = 0;
  return {
    getCount: function() { return count; },
    increase: function() { count += 1; },
    decrease: function() { count -= 1; }
  };
}
