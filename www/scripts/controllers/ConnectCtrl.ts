///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class ConnectCtrl {
        static $inject = ["$scope", "$document", "ConnnectService"];
        constructor($scope: any, $document: any, ConnnectService: any) {
            $scope.connectAuto = () => {
                let connectStatus = ConnnectService.connectAuto();
                if (connectStatus) {
                    $scope.isConnected = true;
                } else {
                    $scope.isConnected = false;
                }
            }
            $scope.manualConnect = (manualAddress: any) => {
                ConnnectService.setHueBridgeIpAddress(parseInt(manualAddress));
                let connectStatusManual = ConnnectService.connect(parseInt(manualAddress));
                if (connectStatusManual) {
                    $scope.isConnected = true;
                } else {
                    $scope.isConnected = false;
                }
            }
        }
    }
}