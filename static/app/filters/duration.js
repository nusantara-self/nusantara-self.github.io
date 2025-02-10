(function () {
  "use strict";

  angular.module("customFilters").filter("duration", function () {
    return function (start, end) {
      if (!start) {
        return "";
      }

      if (end) {
        // Compute duration between end and start
        var duration = moment(end).diff(moment(start));

        return moment.duration(duration, "milliseconds").humanize();
      } else {
        // Compute duration till now
        return moment(start).fromNow(true);
      }
    };
  });
})();
