///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class SpeechCtrl {
        static $inject = ["$scope", "$document", "$ionicLoading"];
        constructor($scope: any, $document: any, $ionicLoading: any) {
            $scope.record = function () {
                $ionicLoading.show({
                    template: '<ion-spinner icon="lines"></ion-spinner><br>You can speak to me ! ...'
                });
                var recognition = new SpeechRecognition();
                recognition.onresult = function (event:any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        $scope.$apply()
                        $ionicLoading.hide().then(function () {
                            console.log("The loading indicator is now hidden");
                        });
                    }
                };
                recognition.start();
            };

        }
    }
}