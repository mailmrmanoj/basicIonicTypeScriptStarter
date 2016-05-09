///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class AccountCtrl {
        static $inject = ["$scope", "$document"];
        constructor($scope: any, $document: any) {
            $scope.showAdvancedSerach = true;
            $scope.settings = {
                enableFriends: true
            };
        }
    }
}