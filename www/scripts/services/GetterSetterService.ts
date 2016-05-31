///<reference path="Reference.ts"/>
module AngularAttack.Services {
    export class GetterSetterService {
        static $inject = ["$injector"];
        constructor() {
            var _xxx = {};

            return {
                getXxx: function () {
                    return _xxx;
                },
                setXxx: function (value:any) {
                    _xxx = value;
                }
            };
        }
    }
}