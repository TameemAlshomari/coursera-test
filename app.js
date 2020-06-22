(function() {
    'use strict';

    angular.module('FoodCheck', [])
        .controller('FoodCheckController', FoodCheckController);

    FoodCheckController.$inject = ['$scope'];

    function FoodCheckController($scope) {
        $scope.chekes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkFood = function() {
            if ($scope.chekes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arraychekes = $scope.chekes.split(',');
                var arrayDishesWithoutEmptys = arraychekes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
