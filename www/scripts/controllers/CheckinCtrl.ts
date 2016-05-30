///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class CheckinCtrl {
        static $inject = ["$scope", "$stateParams", "Chats"];
        constructor($scope: any, $stateParams:any, Chats: any) {
         $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
      };
  
        }
    }
}