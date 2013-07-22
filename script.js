function CounterCtrl($scope) {
    $scope.count = 0;
    $scope.discos = prompt("Qual a quantidade de discos?","2");
    $scope.init = function() {
        $scope.count = Math.pow(2,$scope.discos) - 1;
    }

    $scope.fall = function() {
        $scope.count -= 1;
    }
}
