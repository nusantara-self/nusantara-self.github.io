(function () {
  "use strict";
  angular.module("customFilters").filter("getField", function () {
    return function (obj, param) {
      if (obj !== undefined && obj !== null) {
        return obj[param];
      } else {
        return "";
      }
    };
  });
})();
