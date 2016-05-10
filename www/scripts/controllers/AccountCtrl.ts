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

            $scope.record = function () {
                //var recognition = new webkitSpeechRecognition(); //To Computer
                $scope.showLoader = true;
                var recognition = new SpeechRecognition(); // To Device
                recognition.lang = 'en-GB';
                recognition.onresult = function (event: any) {
                    if (event.results.length > 0) {
                        $scope.recognizedText = event.results[0][0].transcript;
                        alert($scope.recognizedText);
                        $scope.showLoader = false;
                        $scope.$apply()
                    }
                };
                recognition.start();
            };
        }
    }
}