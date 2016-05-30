///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class LanguagesCtrl {
        static $inject = ["$scope", "Chats"];
        constructor($scope: any, Chats: any) {
            $scope.languages = [
                { name: 'English' },
                { name: 'Hindi' },
                { name: 'Kannada' },
            ];
            $scope.activity = [];
            $scope.setLanguage = function (language: any) {
               
            };

        }
    }
}