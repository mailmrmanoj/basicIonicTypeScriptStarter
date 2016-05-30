///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class SpeechCtrl {
        static $inject = ["$scope", "$document", "$ionicLoading"];
        constructor($scope: any, $document: any, $ionicLoading: any,$ionicPopup:any) {
            $scope.recognizedText = '';
            $scope.record = function () {
                $ionicLoading.show({
                    templateUrl: "templates/loading.html",
                    animation: 'fade-in'
                });
               
                var recognition = new SpeechRecognition();
                recognition.lang = 'es-GB';//Englisg UK
                recognition.onresult = function (event:any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        $scope.$apply()
                        showAlert(event.results[0][0].transcript);
                    }
                };
                recognition.start();
            };
             function showAlert(text:any) {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });

                var alertPopup = $ionicPopup.alert({
                    title: 'Hey there!',
                    template: 'You just said ' + '<span class="boldText">' + '"' + text + '"' + '</span>' + '!!',
                    noBackdrop: true
                });
                alertPopup.then(function (res:any) {
                    console.log('Thank you');
                });
            };

        }
    }
}