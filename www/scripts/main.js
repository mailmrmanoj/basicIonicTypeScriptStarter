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
            /*RestangularProvider.setBaseUrl('url');
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
            function ConnectCtrl($scope, $document, ConnnectService) {
                $scope.connectAuto = function () {
                    var connectStatus = ConnnectService.connectAuto();
                    if (connectStatus) {
                        $scope.isConnected = true;
                    }
                    else {
                        $scope.isConnected = false;
                    }
                };
                $scope.manualConnect = function (manualAddress) {
                    ConnnectService.setHueBridgeIpAddress(parseInt(manualAddress));
                    var connectStatusManual = ConnnectService.connect(parseInt(manualAddress));
                    if (connectStatusManual) {
                        $scope.isConnected = true;
                    }
                    else {
                        $scope.isConnected = false;
                    }
                };
            }
            ConnectCtrl.$inject = ["$scope", "$document", "ConnnectService"];
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
            function SpeechCtrl($scope, $timeout, GetterSetterService, ConnnectService, $ionicLoading, $ionicPopup) {
                $scope.recognizedText = '';
                function callAtTimeout() {
                    if ($scope.recognizedText.length <= 0) {
                        $ionicLoading.hide();
                    }
                }
                $scope.record = function () {
                    triggerAction("on");
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
                        triggerAction(text);
                    });
                }
                ;
                function triggerAction(text) {
                    text = text.toUpperCase();
                    if (text == "ON") {
                        ConnnectService.lightOn();
                    }
                    if (text == "OFF") {
                        ConnnectService.lightOff();
                    }
                    if (text == "Change colour") {
                        ConnnectService.lightsSetColor1();
                    }
                    if (text == "Festive") {
                        ConnnectService.lightsSetColor2();
                    }
                    if (text == "Party") {
                        ConnnectService.lightsSetColor3();
                    }
                }
            }
            SpeechCtrl.$inject = ["$scope", "$timeout", "GetterSetterService", "ConnnectService", "$ionicLoading", "$ionicPopup"];
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
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var RESTService = (function () {
            function RESTService($resource) {
                var Project = $resource('https://api.mongolab.com/api/1/databases' +
                    '/angularjs/collections/projects/:id', { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
                    update: { method: 'PUT' }
                });
                Project.prototype.update = function (cb) {
                    return Project.update({ id: this._id.$oid }, angular.extend({}, this, { _id: undefined }), cb);
                };
                Project.prototype.destroy = function (cb) {
                    return Project.remove({ id: this._id.$oid }, cb);
                };
            }
            RESTService.$inject = ["$resource"];
            return RESTService;
        }());
        Services.RESTService = RESTService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var ConnnectService = (function () {
            function ConnnectService(resource, $http) {
                // JavaScript code for the "Philips Hue Demo" example app.
                /** Application object. */
                var app = {};
                /** User name (you can change this, must be at least 10 characters). */
                app.user = 'evo1234567';
                /** Default light. */
                app.lightId = 1;
                /** IP-address of the Hue Bridge. */
                app.bridgeIP = null;
                /**
                 * Define colors that the lights can be configured with.
                 * The colour buttons are set to these colours.
                 */
                app.hueColors = [
                    { 'hue': 1000, 'bri': 75, 'sat': 250 },
                    { 'hue': 10000, 'bri': 75, 'sat': 250 },
                    { 'hue': 30000, 'bri': 75, 'sat': 250 }
                ];
                return {
                    getHueBridgeIpAddress: function (ipaddress) {
                        return app.bridgeIP || ipaddress;
                    },
                    setHueBridgeIpAddress: function (ipaddress) {
                        app.bridgeIP = ipaddress;
                    },
                    connectAuto: function (ipaddress) {
                        return this.fetchBridgeIP(function (ipaddress) {
                            this.setHueBridgeIpAddress(ipaddress);
                            this.connect();
                        });
                    },
                    connectToIP: function () {
                        this.connect();
                    },
                    fetchBridgeIP: function (successFun, failFun) {
                        $.getJSON('https://www.meethue.com/api/nupnp', function (data) {
                            if (data[0] && data[0].hasOwnProperty('internalipaddress')) {
                                successFun && successFun(data[0].internalipaddress);
                            }
                            else {
                                failFun && failFun('Could not find ipaddress');
                            }
                        }).fail(failFun);
                    },
                    checkConnection: function (successFun, failFun) {
                        $.ajax({
                            type: 'GET',
                            dataType: 'json',
                            url: 'http://' +
                                this.getHueBridgeIpAddress() + '/api/' +
                                this.user + '/config',
                            success: successFun,
                            error: function (a, err) { failFun(err); }
                        });
                    },
                    registerUser: function (userName, successFun, failFun, ipAddress) {
                        var data = { "devicetype": "test user", "username": userName };
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            timeout: 3000,
                            url: 'http://' + this.getHueBridgeIpAddress(ipAddress) + '/api/',
                            data: JSON.stringify(data),
                            success: function (data) { successFun(data); },
                            error: function (a, err) { failFun(err); }
                        });
                    },
                    connect: function (ipaddress) {
                        $('#status').html('Connecting...');
                        this.registerUser(app.user, function (json) {
                            console.log(json[0]);
                            if (json[0].error) {
                                $('#status').html(json[0].error.description);
                            }
                            else if (json[0].success) {
                                $('#status').html('Connected');
                            }
                            else {
                                $('#status').html('Something went wrong');
                            }
                        }, function () {
                            $('#status').html('Could not find Hue Bridge');
                        }, ipaddress);
                    },
                    selectLight: function (lightId) {
                        app.lightId = lightId;
                    },
                    lightOn: function () {
                        this.lightSetState(app.lightId, { "on": true });
                    },
                    lightOff: function () {
                        this.lightSetState(app.lightId, { "on": false });
                    },
                    lightsSetColor1: function () {
                        this.lightSetState(app.lightId, app.hueColors[0]);
                    },
                    lightsSetColor2: function () {
                        this.lightSetState(app.lightId, app.hueColors[1]);
                    },
                    lightsSetColor3: function () {
                        this.lightSetState(app.lightId, app.hueColors[2]);
                    },
                    lightsEffectOn: function () {
                        this.lightSetState(app.lightId, { "effect": "colorloop" });
                    },
                    lightsEffectOff: function () {
                        this.lightSetState(app.lightId, { "effect": "none" });
                    },
                    lightSetState: function (lightId, state) {
                        var ipAddress = '192.168.1.' + this.getHueBridgeIpAddress();
                        $.ajax({
                            type: 'PUT',
                            dataType: 'json',
                            url: 'http://' + parseInt(ipAddress) + '/api/' +
                                app.user + '/lights/' + lightId + '/state',
                            data: JSON.stringify(state),
                            success: function (data) { },
                            error: function (a, err) { }
                        });
                    },
                    setSixScore3: function (hue, state, bri) {
                        var req2 = {
                            method: 'PUT',
                            url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/3/state',
                            data: {
                                "hue": hue,
                                "on": state,
                                "bri": bri
                            }
                        };
                        // $http returns a promise, which has a then function, which also returns a promise
                        var helloPromise3 = $http(req2).then(function (response) {
                            // The then function here is an opportunity to modify the response
                            console.log("big" + response);
                            // The return value gets picked up by the then in the controller.
                            //
                            // je ne sais pas ou il pioche le terme data
                            // peut etre une expression de Angular
                            //
                            return response.data;
                        });
                        // Return the promise to the controller
                        return helloPromise3;
                    }
                };
            }
            ConnnectService.$inject = ["$resource", "$http"];
            return ConnnectService;
        }());
        Services.ConnnectService = ConnnectService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
///<reference path="Reference.ts"/>
angular.module(AngularAttack.AngularAttackConstants.SERVICES, []).service(AngularAttack.Services);
///<reference path="../Reference.ts"/>
///<reference path="GetterSetterService.ts"/>
///<reference path="RESTService.ts"/>
///<reference path="ConnectService.ts"/>
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
            var dependencies = ["ionic", AngularAttack.AngularAttackConstants.DIRECTIVES, AngularAttack.AngularAttackConstants.CONTROLLERS, AngularAttack.AngularAttackConstants.SERVICES, AngularAttack.AngularAttackConstants.FACTORIES, "restangular", "ngResource", "ui.router"];
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
