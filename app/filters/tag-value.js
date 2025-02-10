(function () {
  "use strict";

  angular.module("customFilters").filter("tagValue", function () {
    return function (tag) {
      if (!tag) {
        return "";
      }

      return _.without(
        [
          tag.namespace,
          ":",
          tag.predicate,
          tag.value ? '="' + tag.value + '"' : null,
        ],
        null
      ).join("");
    };
  });
})();
