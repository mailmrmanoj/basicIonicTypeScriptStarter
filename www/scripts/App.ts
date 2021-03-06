///<reference path="Reference.ts"/>
module AngularAttack {
    "use strict";
    // import commonConstants = Reactore.Common.Constants.CommonConstants;
    // import globalConstants = Reactore.Constants.GlobalConstants;
    export class App {
        module: ng.IModule;

        constructor() {
            var dependencies = ["ionic",AngularAttack.AngularAttackConstants.DIRECTIVES, AngularAttack.AngularAttackConstants.CONTROLLERS, AngularAttack.AngularAttackConstants.SERVICES,AngularAttack.AngularAttackConstants.FACTORIES,"restangular","ui.router"];

            //dependencies = dependencies.concat(window.reactoreConfigurations.moduleConfig.dependencies);
            this.module = angular.module(AngularAttack.AngularAttackConstants.MODULE, dependencies);
            var router = new AngularAttack.Router();
            var bootstraper = new AngularAttack.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
            this.setModuleUrlConstants();

            // this.module.value(commonConstants.CONFIG_CONSTANT, window.reactoreConfigurations.applicationConfig);
        }
        setModuleUrlConstants = () => {
            $.ajax({
                url: AngularAttack.AngularAttackConstants.CONFIG_JSON_FILE_PATH,
                dataType: "json",
                async: false,
                success: (json) => {
                    this.module.value(AngularAttack.AngularAttackConstants.CONFIG_CONSTANT, json);
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    };
    new App();
}
// Date.prototype.yyyymmdd = function () {
//     var yyyy = this.getFullYear().toString();
//     var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
//     var dd = this.getDate().toString();
//     return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]); // padding
// };