///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class MainCtrl {
        static $inject = ["$scope", "$document", "$ionicSideMenuDelegate"];
        constructor($scope: any, $document: any, $ionicSideMenuDelegate: any) {
            $scope.languages = [
                { name: 'English' },
                { name: 'Hindi' },
                { name: 'Kannada' },
            ];
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
        }
    }
}