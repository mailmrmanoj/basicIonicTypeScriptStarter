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
            $scope.updateSelection = function (position:any, entities:any,selectedLanguage:any) {
                  angular.forEach(entities, function (item, index) {
                    if (position != index)
                        item.checked = false;
                });
            }

        }
    }
}