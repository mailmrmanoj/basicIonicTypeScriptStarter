///<reference path="Reference.ts"/>
module AngularAttack {
  // interface IRouter {
  //     initialize: ($stateProvider, $urlRouteProvider) => void;
  // }
  export class Router implements AngularAttack.IRouter {
    initialize($stateProvider: any, $urlRouteProvider: any) {
      $stateProvider

      $stateProvider
        .state('eventmenu', {
          url: "/event",
          abstract: true,
          templateUrl: "templates/event-menu.html",
          controller: "MainCtrl"

        })
        .state('eventmenu.home', {
          url: "/home",
          views: {
            'menuContent': {
              templateUrl: "templates/home.html",
              controller: "SpeechCtrl"

            }
          }
        })
        .state('eventmenu.languages', {
          url: "/languages",
          views: {
            'menuContent': {
              templateUrl: "templates/languages.html",
              controller: "LanguagesCtrl"
            }
          }
        })
        .state('eventmenu.checkin', {
          url: "/check-in",
          views: {
            'menuContent': {
              templateUrl: "templates/check-in.html",
              controller: "CheckinCtrl"
            }
          }
        })
        .state('eventmenu.checkin.auto', {
          url: "/auto",
          views: {
            'connect-hue': {
              templateUrl: "templates/about-auto.html",
              controller: "ConnectCtrl"
            }
          }
        })
        .state('eventmenu.checkin.manual', {
          url: "/manual",
          views: {
            'connect-hue': {
              templateUrl: "templates/about-manual.html",
              controller: "ConnectCtrl"
            }
          }
        });
      $urlRouteProvider.otherwise("/event/home");
    }
  }
}