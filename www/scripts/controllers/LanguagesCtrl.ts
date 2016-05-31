///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class LanguagesCtrl {
        static $inject = ["$scope", "GetterSetterService"];
        constructor($scope: any, GetterSetterService: any) {
            $scope.languages = [
                { name: 'English', checked: true },
                { name: 'Hindi', checked: false },
            ];
            $scope.updateSelection = function (position: any, entities: any, selectedLanguage: any) {
                angular.forEach(entities, function (item, index) {
                    if (position != index)
                        item.checked = false;
                });

                var isSelected = getSelectedLanuage(entities);
                GetterSetterService.setXxx(isSelected.name);
                function getSelectedLanuage(entities: any) {
                    for (var i = 0; i < entities.length; i++) {
                        if (entities[i].checked == true) {
                            var isSelected = entities[i];
                            return isSelected;
                        }
                    }
                }
            }
        }
    }
}