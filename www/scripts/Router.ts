///<reference path="Reference.ts"/>
module AngularAttack {
    // interface IRouter {
    //     initialize: ($stateProvider, $urlRouteProvider) => void;
    // }
    export class Router implements AngularAttack.IRouter {
        initialize($stateProvider: any, $urlRouteProvider: any) {
            $stateProvider
                //region common navigation
                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })

                // Each tab has its own nav history stack:

                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            templateUrl: 'templates/tab-dash.html',
                            controller: 'DashCtrl'
                        }
                    }
                })

                .state('tab.chats', {
                    url: '/chats',
                    views: {
                        'tab-chats': {
                            templateUrl: 'templates/tab-chats.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('tab.chat-detail', {
                    url: '/chats/:chatId',
                    views: {
                        'tab-chats': {
                            templateUrl: 'templates/chat-detail.html',
                            controller: 'ChatDetailCtrl'
                        }
                    }
                })

                .state('tab.speech', {
                    url: '/speech',
                    views: {
                        'tab-speech': {
                            templateUrl: 'templates/tab-speech.html',
                            controller: 'SpeechCtrl'
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouteProvider.otherwise('/tab/dash');

            //endregion
        }
    }
}