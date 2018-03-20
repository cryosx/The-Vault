'use strict';
module.exports = function() {
    let vault = {};
    function setValue(key, value) {
        vault[key] = value;
    }
    function getValue(key) 
    {
        if (vault.hasOwnProperty(key)) {
            return vault[key];
        } else {
            return null;
        }
    }

  return {
      setValue: setValue,
      getValue: getValue,
  };
};