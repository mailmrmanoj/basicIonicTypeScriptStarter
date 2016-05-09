///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class DashCtrl {
        static $inject = ["$scope", "$document"];
        constructor($scope:any, $document:any) {
            $scope.message = "Hello";      
                }
    }
}