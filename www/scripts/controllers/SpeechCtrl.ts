///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class SpeechCtrl {
        static $inject = ["$scope", "$timeout", "$ionicLoading"];
        constructor($scope: any, $timeout: any, $ionicLoading: any, $ionicPopup: any) {
            $scope.recognizedText = '';

            function callAtTimeout() {
                if ($scope.recognizedText.length <= 0) {
                    $ionicLoading.hide().then(function () {
                        console.log("The loading indicator is now hidden");
                    });
                }
            }

            $scope.record = function () {
                $ionicLoading.show({
                    templateUrl: "templates/loading.html",
                    animation: 'fade-in'
                });

                var recognition = new SpeechRecognition(); //on computer
                //var  recognition = new webkitSpeechRecognition ();//on device
                recognition.lang = 'es-GB';//Englisg UK
                // recognition.lang = 'hi-IN';//Hindi IN
                recognition.onresult = function (event: any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        alert($scope.recognizedText);
                        $scope.$apply()
                        showAlert(event.results[0][0].transcript);
                    }
                };
                recognition.start();
                $timeout(callAtTimeout, 5000);

            };
            function showAlert(text: any) {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });

                var alertPopup = $ionicPopup.alert({
                    title: 'Hey there!',
                    template: 'You just said ' + '<span class="boldText">' + '"' + text + '"' + '</span>' + '!!',
                    noBackdrop: true
                });
                alertPopup.then(function (res: any) {
                    console.log('Thank you');
                });
            };

        }
    }
}