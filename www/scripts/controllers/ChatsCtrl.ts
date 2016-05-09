///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class ChatsCtrl {
        static $inject = ["$scope", "Chats"];
        constructor($scope: any, Chats:any) {
            $scope.chats = Chats.all();
            $scope.remove = function (chat:any) {
                Chats.remove(chat);
            };
        }
    }
}