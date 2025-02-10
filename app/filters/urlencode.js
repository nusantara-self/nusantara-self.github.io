(function () {
  "use strict";

  angular.module("customFilters").filter("escape", function () {
    return window.encodeURIComponent;
  });
})();
