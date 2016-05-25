///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var AngularAttackConstants = (function () {
        function AngularAttackConstants() {
        }
        AngularAttackConstants.MODULE = "angular.attack";
        AngularAttackConstants.DIRECTIVES = "angular.attack.directives";
        AngularAttackConstants.CONTROLLERS = "angular.attack.controllers";
        AngularAttackConstants.SERVICES = "angular.attack.services";
        AngularAttackConstants.FACTORIES = "angular.attack.factories";
        AngularAttackConstants.INTERCEPTORS = "angular.attack.interceptors";
        AngularAttackConstants.FILTERS = "angular.attack.filters";
        AngularAttackConstants.FACADES = "angular.attack.facades";
        AngularAttackConstants.CONFIG_JSON_FILE_PATH = "scripts/config.json";
        AngularAttackConstants.CONFIG_CONSTANT = "configConstant";
        return AngularAttackConstants;
    }());
    AngularAttack.AngularAttackConstants = AngularAttackConstants;
})(AngularAttack || (AngularAttack = {}));
///<reference path="../Reference.ts"/>       
///<reference path="AngularAttackConstants.ts"/>
/// <reference path="../types/jquery/jquery.d.ts" />
/// <reference path="../types/angularjs/angular.d.ts" />
/// <reference path="../types/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../types/jqueryui/jqueryui.d.ts" />
/// <reference path="../types/lodash/lodash.d.ts" />
/// <reference path="../types/restangular/restangular.d.ts" />
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    // interface IRouter {
    //     initialize: ($stateProvider, $urlRouteProvider) => void;
    // }
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $stateProvider
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
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
        };
        return Router;
    }());
    AngularAttack.Router = Router;
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Bootstrapper = (function () {
        function Bootstrapper(module, router) {
            this.module = module;
            this.router = router;
        }
        //region confg and run methods declaration
        Bootstrapper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstrapper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
            if (localStorage.getItem("apiKey")) {
                RestangularProvider.setDefaultHeaders({ apiKey: localStorage.getItem("apiKey") });
            }
            else {
                location.href = "index.html#/home";
            }
            /*RestangularProvider.setBaseUrl('http://192.168.1.165:90/common/');
             RestangularProvider.setDefaultHeaders({ apiKey: "Hello_From_Ionic" });*/
        };
        //region confg and run methods implementation
        //region confg and run methods implementation
        Bootstrapper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
            //$http.defaults.headers.common.apiKey = localStorage.getItem("apiKey") ? localStorage.getItem("apiKey") : "12s-212";
        };
        return Bootstrapper;
    }());
    AngularAttack.Bootstrapper = Bootstrapper;
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Factories;
    (function (Factories) {
        var Chats = (function () {
            function Chats() {
                // Some fake testing data
                var chats = [{
                        id: 0,
                        name: 'Ben Sparrow',
                        lastText: 'You on your way?',
                        face: 'img/ben.png'
                    }, {
                        id: 1,
                        name: 'Max Lynx',
                        lastText: 'Hey, it\'s me',
                        face: 'img/max.png'
                    }, {
                        id: 2,
                        name: 'Adam Bradleyson',
                        lastText: 'I should buy a boat',
                        face: 'img/adam.jpg'
                    }, {
                        id: 3,
                        name: 'Perry Governor',
                        lastText: 'Look at my mukluks!',
                        face: 'img/perry.png'
                    }, {
                        id: 4,
                        name: 'Mike Harrington',
                        lastText: 'This is wicked good ice cream.',
                        face: 'img/mike.png'
                    }];
                return {
                    all: function () {
                        return chats;
                    },
                    remove: function (chat) {
                        chats.splice(chats.indexOf(chat), 1);
                    },
                    get: function (chatId) {
                        for (var i = 0; i < chats.length; i++) {
                            if (chats[i].id === parseInt(chatId)) {
                                return chats[i];
                            }
                        }
                        return null;
                    }
                };
            }
            Chats.$inject = ["$injector"];
            return Chats;
        }());
        Factories.Chats = Chats;
    })(Factories = AngularAttack.Factories || (AngularAttack.Factories = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.FACTORIES, []).service(AngularAttack.Factories);
///<reference path="../Reference.ts"/>
///<reference path="Chats.ts"/>
///<reference path="Factories.ts"/>
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var DashCtrl = (function () {
            function DashCtrl($scope, $document) {
                $scope.message = "Hello";
            }
            DashCtrl.$inject = ["$scope", "$document"];
            return DashCtrl;
        }());
        Controllers.DashCtrl = DashCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var ChatsCtrl = (function () {
            function ChatsCtrl($scope, Chats) {
                $scope.chats = Chats.all();
                $scope.remove = function (chat) {
                    Chats.remove(chat);
                };
            }
            ChatsCtrl.$inject = ["$scope", "Chats"];
            return ChatsCtrl;
        }());
        Controllers.ChatsCtrl = ChatsCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var ChatDetailCtrl = (function () {
            function ChatDetailCtrl($scope, $stateParams, Chats) {
                $scope.chat = Chats.get($stateParams.chatId);
            }
            ChatDetailCtrl.$inject = ["$scope", "$stateParams", "Chats"];
            return ChatDetailCtrl;
        }());
        Controllers.ChatDetailCtrl = ChatDetailCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var SpeechCtrl = (function () {
            function SpeechCtrl($scope, $document, $ionicLoading) {
                $scope.record = function () {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="lines"></ion-spinner><br>You can speak to me ! ...'
                    });
                    var recognition = new SpeechRecognition();
                    recognition.onresult = function (event) {
                        if (event.results.length > 0) {
                            $scope.recognizedText = event.results[0][0].transcript;
                            $scope.$apply();
                            $ionicLoading.hide().then(function () {
                                console.log("The loading indicator is now hidden");
                            });
                        }
                    };
                    recognition.start();
                };
            }
            SpeechCtrl.$inject = ["$scope", "$document", "$ionicLoading"];
            return SpeechCtrl;
        }());
        Controllers.SpeechCtrl = SpeechCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="../Reference.ts"/>
///<reference path="DashCtrl.ts"/>
///<reference path="ChatsCtrl.ts"/>
///<reference path="ChatDetailCtrl.ts"/>
///<reference path="SpeechCtrl.ts"/>
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var DemoService = (function () {
            function DemoService() {
            }
            DemoService.$inject = ["$injector"];
            return DemoService;
        }());
        Services.DemoService = DemoService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.SERVICES, []).service(AngularAttack.Services);
///<reference path="../Reference.ts"/>
///<reference path="DemoService.ts"/>
///<reference path="Services.ts"/>
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Directives;
    (function (Directives) {
        var demoDirective = (function () {
            function demoDirective() {
                return {
                    restrict: "E",
                    template: '<div class="nopadding col-xs-12 col-sm-4 color-gray record-show">    Showing <label class="record-color-label">{{(paginationSettings.currentPage*paginationSettings.pageSize)-(paginationSettings.pageSize-1)}}-{{(paginationSettings.currentPage*paginationSettings.pageSize)>paginationSettings.totalItems?paginationSettings.totalItems:(paginationSettings.currentPage*paginationSettings.pageSize)}}</label> of <label class="record-color-label">{{paginationSettings.totalItems}}</label> records</div>'
                };
            }
            return demoDirective;
        }());
        Directives.demoDirective = demoDirective;
    })(Directives = AngularAttack.Directives || (AngularAttack.Directives = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.DIRECTIVES, []).controller(AngularAttack.Directives);
///<reference path="../Reference.ts"/>
///<reference path="DemoDirective.ts"/>
///<reference path="Directives.ts"/>
///<reference path="constants/Reference.ts"/>
///<reference path="Vendor.ts"/>
///<reference path="Misc.d.ts"/>
///<reference path="Router.ts"/>
///<reference path="Bootstrapper.ts"/>
///<reference path="factories/Reference.ts"/>
///<reference path="controllers/Reference.ts"/>
///<reference path="services/Reference.ts"/>
///<reference path="directives/Reference.ts"/>
///<reference path="App.ts"/> 
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    "use strict";
    // import commonConstants = Reactore.Common.Constants.CommonConstants;
    // import globalConstants = Reactore.Constants.GlobalConstants;
    var App = (function () {
        function App() {
            var _this = this;
            this.setModuleUrlConstants = function () {
                $.ajax({
                    url: AngularAttack.AngularAttackConstants.CONFIG_JSON_FILE_PATH,
                    dataType: "json",
                    async: false,
                    success: function (json) {
                        _this.module.value(AngularAttack.AngularAttackConstants.CONFIG_CONSTANT, json);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            };
            var dependencies = ["ionic", AngularAttack.AngularAttackConstants.DIRECTIVES, AngularAttack.AngularAttackConstants.CONTROLLERS, AngularAttack.AngularAttackConstants.SERVICES, AngularAttack.AngularAttackConstants.FACTORIES, "restangular", "ui.router"];
            //dependencies = dependencies.concat(window.reactoreConfigurations.moduleConfig.dependencies);
            this.module = angular.module(AngularAttack.AngularAttackConstants.MODULE, dependencies);
            var router = new AngularAttack.Router();
            var bootstraper = new AngularAttack.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
            this.setModuleUrlConstants();
            // this.module.value(commonConstants.CONFIG_CONSTANT, window.reactoreConfigurations.applicationConfig);
        }
        return App;
    }());
    AngularAttack.App = App;
    ;
    new App();
})(AngularAttack || (AngularAttack = {}));
// Date.prototype.yyyymmdd = function () {
//     var yyyy = this.getFullYear().toString();
//     var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
//     var dd = this.getDate().toString();
//     return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]); // padding
// }; 
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.CONTROLLERS, []).controller(AngularAttack.Controllers);
