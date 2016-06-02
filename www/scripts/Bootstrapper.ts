///<reference path="Reference.ts"/>
module AngularAttack {
    export class Bootstrapper implements AngularAttack.IBootstraper {
        constructor(public module: ng.IModule, public router: AngularAttack.IRouter) {
        }

        //region confg and run methods declaration
    bootstrap() {
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", (RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: any) =>
                this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider)]);

        }
        initRestangular(RestangularProvider: any) {
            RestangularProvider.setParentless(true, []);
            if (localStorage.getItem("apiKey")) {
                RestangularProvider.setDefaultHeaders({ apiKey: localStorage.getItem("apiKey") });
            } else {
                location.href = "index.html#/home"; 
            }
            
            /*RestangularProvider.setBaseUrl('url');
             RestangularProvider.setDefaultHeaders({ apiKey: "Hello_From_Ionic" });*/
        }
         //region confg and run methods implementation
  

        //region confg and run methods implementation
        initializeConfig(RestangularProvider: restangular.IProvider,$stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider) {
               this.initRestangular(RestangularProvider);
             this.router.initialize($stateProvider, $urlRouterProvider);
            //$http.defaults.headers.common.apiKey = localStorage.getItem("apiKey") ? localStorage.getItem("apiKey") : "12s-212";
        }
        //endregion
    }
}