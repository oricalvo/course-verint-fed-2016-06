var module = angular.module("myApp", []);

module.run(function($rootScope) {
});

module.controller("HomeCtrl", function($scope) {
    $scope.num = 5;

    $scope.change = function() {
        //$scope.num = 6;

        $scope.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }
});

module.directive("button", function($parse, $http) {
    var ddo = {
        restrict: "E",
        compile: function(element, attrs) {
            console.log("button.compile");
            
            element.addClass("btn");
        }
    };

    return ddo;
});

module.directive("repeater", function($parse, $http, $compile) {
    var ddo = {
        restrict: "E",
        terminal: true,
        compile: function(element, attrs) {


            var template = $(element.html());

            element.empty();

            var linkFn = $compile(template);

            return function link(scope, element, attrs) {
                scope.$watch(attrs.model, function(newModel) {
                    if(newModel) {
                        for (var i = 0; i < newModel.length; i++) {
                            var item = newModel[i];

                            var childScope = scope.$new();
                            childScope[attrs.modelItem] = item;

                            var clone = linkFn(childScope, function () {
                            });
                            element.append(clone);
                        }
                    }

                    //console.log(newValue);
                });
            }

            // var compiledElement = element;
            // var html = compiledElement[0].outerHTML;
            // var begin = element.after("<!-- begin repeater -->");
            // element.remove();
            //
            // return function link(scope, element, attrs) {
            //     console.log(element);
            //     var after = element.after("<!-- end repeater -->");
            //
            //     scope.$watch(attrs.repeater, function(newValue) {
            //         for (var i = 0; i < newValue; i++) {
            //             after.after(html);
            //         }
            //     });
            // }

            // for(var i=0; i<attrs.repeater*1; i++) {
            //     console.log(element[0].outerHTML);
            // }
            //
            // console.log("button.compile");
            //
            // element.addClass("btn");
        }
    };

    return ddo;
});

