module AngularAttack {
    export interface IRouter {
        initialize:($stateProvider:any, $urlRouteProvider:any) => void;
    }
}