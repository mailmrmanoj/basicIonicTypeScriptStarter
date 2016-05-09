///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class ChatDetailCtrl {
        static $inject = ["$scope", "$stateParams", "Chats"];
        constructor($scope: any, $stateParams:any, Chats: any) {
            $scope.chat = Chats.get($stateParams.chatId);
        }
    }
}