"use strict";

function getType(obj) {
  if (obj === NaN){
    return 'NaN'
  } else if (obj === null) {
    return 'null'
  } else if (Array.isArray(obj)) {
    return 'array'
  } else {
    return (typeof obj)
  }
}
