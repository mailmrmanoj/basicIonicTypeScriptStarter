///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class AccountCtrl {
        static $inject = ["$scope", "$document"];
        constructor($scope: any, $document: any) {
            $scope.data = {
                speechText: ''
            };
            $scope.recognizedText = '';

            // $scope.speakText = function () {
            //     TTS.speak({
            //         text: $scope.data.speechText,
            //         locale: 'en-GB',
            //         rate: 1.5
            //     }, function () {
            //         // Do Something after success
            //     }, function (reason) {
            //         // Handle the error case
            //     });
            // };
            document.addEventListener('deviceready', onDeviceReady, false);

            function onDeviceReady() {
                $scope.recognition1 = new SpeechRecognition();
                alert($scope.recognition1);
                $scope.recognition1.onresult = function (event: any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        alert($scope.recognizedText);
                    }
                }
            }

            $scope.record = function () {
                var recognition = new webkitSpeechRecognition(); //To Computer
                $scope.showLoader = true;
                //   alert("test");
                document.addEventListener('deviceready', onDeviceReady, false);

                // var recognition = new SpeechRecognition(); // To Device
                $scope.recognition1.lang = 'en-GB';
                $scope.recognition1.onresult = function (event: any) {
                    alert("success");
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        alert($scope.recognizedText);
                        $scope.showLoader = false;
                        $scope.$apply()
                    }
                };
                $scope.recognition1.start();
            };

            var recording = false;
            var spokenInput = '';
            $scope.getSpeech = function () {
                if (!recording) {

                    recording = true;
                    spokenInput = '';

                    var recognition = new SpeechRecognition();

                    recognition.onresult = function (event:any) {
                        if (event.results.length > 0) {
                            spokenInput = event.results[0][0].transcript;
                        }
                    };

                    recognition.onend = function () {
                        recording = false;
                        if (spokenInput) {
                            alert(spokenInput);
                        } else {
                            alert('For best results, try speaking immediately after the beep!');
                        }
                    };

                    setTimeout(function () {
                        recognition.stop();
                    }, 6000); // Force stop  after 6 seconds

                }
            };
        }
    }
}