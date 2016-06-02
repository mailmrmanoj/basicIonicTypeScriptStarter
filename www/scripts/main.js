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
            $stateProvider;
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
                        templateUrl: "templates/about-auto.html"
                    }
                }
            })
                .state('eventmenu.checkin.manual', {
                url: "/manual",
                views: {
                    'connect-hue': {
                        templateUrl: "templates/about-manual.html"
                    }
                }
            });
            $urlRouteProvider.otherwise("/event/home");
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
        var MainCtrl = (function () {
            function MainCtrl($scope, $document, $ionicSideMenuDelegate) {
                $scope.toggleLeft = function () {
                    $ionicSideMenuDelegate.toggleLeft();
                };
            }
            MainCtrl.$inject = ["$scope", "$document", "$ionicSideMenuDelegate"];
            return MainCtrl;
        }());
        Controllers.MainCtrl = MainCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var LanguagesCtrl = (function () {
            function LanguagesCtrl($scope, GetterSetterService) {
                $scope.languages = [
                    { name: 'English', checked: true },
                    { name: 'Hindi', checked: false },
                ];
                $scope.updateSelection = function (position, entities, selectedLanguage) {
                    angular.forEach(entities, function (item, index) {
                        if (position != index)
                            item.checked = false;
                    });
                    var isSelected = getSelectedLanuage(entities);
                    GetterSetterService.setXxx(isSelected.name);
                    function getSelectedLanuage(entities) {
                        for (var i = 0; i < entities.length; i++) {
                            if (entities[i].checked == true) {
                                var isSelected = entities[i];
                                return isSelected;
                            }
                        }
                    }
                };
            }
            LanguagesCtrl.$inject = ["$scope", "GetterSetterService"];
            return LanguagesCtrl;
        }());
        Controllers.LanguagesCtrl = LanguagesCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var ConnectCtrl = (function () {
            function ConnectCtrl($scope, $document, $ionicSideMenuDelegate) {
            }
            ConnectCtrl.$inject = ["$scope", "$document", "$ionicSideMenuDelegate"];
            return ConnectCtrl;
        }());
        Controllers.ConnectCtrl = ConnectCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var CheckinCtrl = (function () {
            function CheckinCtrl($scope, $stateParams, Chats) {
                $scope.showForm = true;
                $scope.shirtSizes = [
                    { text: 'Large', value: 'L' },
                    { text: 'Medium', value: 'M' },
                    { text: 'Small', value: 'S' }
                ];
                $scope.attendee = {};
                $scope.submit = function () {
                    if (!$scope.attendee.firstname) {
                        alert('Info required');
                        return;
                    }
                    $scope.showForm = false;
                    $scope.attendees.push($scope.attendee);
                };
            }
            CheckinCtrl.$inject = ["$scope", "$stateParams", "Chats"];
            return CheckinCtrl;
        }());
        Controllers.CheckinCtrl = CheckinCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var SpeechCtrl = (function () {
            function SpeechCtrl($scope, $timeout, GetterSetterService, $ionicLoading, $ionicPopup) {
                $scope.recognizedText = '';
                function callAtTimeout() {
                    if ($scope.recognizedText.length <= 0) {
                        $ionicLoading.hide();
                    }
                }
                $scope.record = function () {
                    $ionicLoading.show({
                        templateUrl: "templates/loading.html",
                        animation: 'fade-in'
                    });
                    var recognition = new SpeechRecognition(); //on device
                    // var recognition = new webkitSpeechRecognition();//on computer
                    var selectedLanguage = GetterSetterService.getXxx();
                    if (typeof (selectedLanguage) === "string") {
                        if (selectedLanguage == "Hindi") {
                            recognition.lang = 'hi-IN'; //Hindi IN
                        }
                        else if (selectedLanguage == "English")
                            recognition.lang = 'es-GB'; //Englisg UK
                    }
                    else {
                        recognition.lang = 'es-GB'; //Englisg UK
                    }
                    recognition.onresult = function (event) {
                        if (event.results.length > 0) {
                            $scope.recognizedText = event.results[0][0].transcript;
                            $scope.$apply();
                            showAlert(event.results[0][0].transcript);
                        }
                    };
                    recognition.start();
                    $timeout(callAtTimeout, 5000);
                };
                function showAlert(text) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: 'Hey there!',
                        template: 'You just said ' + '<span class="boldText">' + '"' + text + '"' + '</span>' + '!!',
                        noBackdrop: true
                    });
                    alertPopup.then(function (res) {
                        console.log('Thank you');
                    });
                }
                ;
            }
            SpeechCtrl.$inject = ["$scope", "$timeout", "GetterSetterService", "$ionicLoading", "$ionicPopup"];
            return SpeechCtrl;
        }());
        Controllers.SpeechCtrl = SpeechCtrl;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="../Reference.ts"/>
///<reference path="MainCtrl.ts"/>
/// <reference path="LanguagesCtrl.ts"/> 
/// <reference path="ConnectCtrl.ts"/> 
///<reference path="CheckinCtrl.ts"/>
///<reference path="SpeechCtrl.ts"/>
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var GetterSetterService = (function () {
            function GetterSetterService() {
                var _xxx = {};
                return {
                    getXxx: function () {
                        return _xxx;
                    },
                    setXxx: function (value) {
                        _xxx = value;
                    }
                };
            }
            GetterSetterService.$inject = ["$injector"];
            return GetterSetterService;
        }());
        Services.GetterSetterService = GetterSetterService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.SERVICES, []).service(AngularAttack.Services);
///<reference path="../Reference.ts"/>
///<reference path="GetterSetterService.ts"/>
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
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.CONTROLLERS, []).controller(AngularAttack.Controllers);
