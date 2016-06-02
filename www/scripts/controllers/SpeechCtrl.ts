///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class SpeechCtrl {
        static $inject = ["$scope", "$timeout", "GetterSetterService", "$ionicLoading", "$ionicPopup"];
        constructor($scope: any, $timeout: any, GetterSetterService: any, $ionicLoading: any, $ionicPopup: any) {
            $scope.recognizedText = '';

            function callAtTimeout() {
                if ($scope.recognizedText.length <= 0) {
                    $ionicLoading.hide();
                }
            }

            $scope.record = function () {
                $ionicLoading.show({
                    templateUrl: "templates/loading.html",
                    animation: 'fade-in'
                });
                   var recognition = new SpeechRecognition(); //on device
               // var recognition = new webkitSpeechRecognition();//on computer
                var selectedLanguage = GetterSetterService.getXxx();
                if (typeof (selectedLanguage) === "string") {
                    if (selectedLanguage == "Hindi") {
                        recognition.lang = 'hi-IN';//Hindi IN
                    } else if (selectedLanguage == "English")
                        recognition.lang = 'es-GB';//Englisg UK
                } else {
                    recognition.lang = 'es-GB';//Englisg UK
                }

                recognition.onresult = function (event: any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        $scope.$apply()
                        showAlert(event.results[0][0].transcript);
                    }
                };
                recognition.start();
                $timeout(callAtTimeout, 5000);

            };
            function showAlert(text: any) {
                $ionicLoading.hide();

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