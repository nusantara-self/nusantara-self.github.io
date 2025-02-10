"use strict";

angular.module("customFilters", []);
angular
  .module("cortexAnalyzerPlaygroundApp", [
    "ui.ace",
    "ngAnimate",
    "ui.bootstrap",
    "customFilters",
  ])
  .controller("AppCtrl", [
    "$http",
    function ($http) {
      var app = this;

      app.json = null;
      app.html = null;
      app.failure = false;

      app.load = function () {
        $http
          .get(
            "https://gist.githubusercontent.com/jimbobnet/52168ec9e4f6513ed83590be35433476/raw/f73125e4cc8ec9716e7998b17bb43b53c1056dc4/asmreport-criticalcve.json"
            // "https://gist.githubusercontent.com/jeromeleonard/b6f17fd94e8af5614f8ed083ba1b160e/raw/1054c25902632c68fd5b2c8beae9426dd0419728/json"
          )
          .then(function (response) {
            app.json = JSON.stringify(response.data);
          });

        $http
          .get(
            "https://raw.githubusercontent.com/jimbobnet/Cortex-Analyzers/master/thehive-templates/Onyphe_ASM_1_0/long.html"
            // "https://raw.githubusercontent.com/TheHive-Project/Cortex-Analyzers/master/thehive-templates/VirusTotal_GetReport_3_1/long.html"
          )
          .then(function (response) {
            app.html = response.data;
          });
      };

      app.generate = function () {
        if (!app.json || !app.html) return;

        app.template = app.html;
        app.content = app.json ? JSON.parse(app.json) : {};
        app.content.success = !app.failure;
      };

      app.clear = function () {
        app.template = undefined;
        app.content = undefined;
      };
    },
  ])
  .directive("report", [
    "$compile",
    function ($compile) {
      function updateReport(a, b, scope) {
        if (
          !angular.isDefined(scope.content) ||
          !angular.isDefined(scope.template)
        ) {
          scope.element.empty();
          return;
        }

        scope.element.empty();
        scope.element.append($compile(scope.template)(scope));
      }

      return {
        restrict: "E",
        replace: true,
        scope: {
          template: "=",
          content: "=",
          success: "=",
          status: "=",
          artifact: "=",
        },
        link: function (scope, element) {
          scope.element = element;
          scope.$watchGroup(["template", "content"], updateReport);
        },
      };
    },
  ]);
