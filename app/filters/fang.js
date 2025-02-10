(function () {
  "use strict";
  angular.module("customFilters").filter("fang", function () {
    return function (value) {
      if (!value) {
        return "";
      }

      return value
        .replace(/\[\.\]/g, ".")
        .replace(/hxxp/gi, "http")
        .replace(/\./g, "[.]")
        .replace(/http/gi, "hxxp");
    };
  });
})();
