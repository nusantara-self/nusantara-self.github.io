(function () {
  "use strict";
  angular.module("customFilters").filter("md5", function () {
    return function (value) {
      if (!value) {
        return "";
      }

      return CryptoJS.MD5(value).toString();
    };
  });
})();
