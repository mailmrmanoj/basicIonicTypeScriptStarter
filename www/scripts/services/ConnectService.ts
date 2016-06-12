///<reference path="Reference.ts"/>
module AngularAttack.Services {
    export class ConnnectService {
        static $inject = ["$resource", "$http"];
        constructor(resource: any, $http: any) {
            // JavaScript code for the "Philips Hue Demo" example app.

            /** Application object. */
            var app: any = {};

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
                getHueBridgeIpAddress: function (ipaddress: any) {
                    return app.bridgeIP || ipaddress;
                },
                setHueBridgeIpAddress: function (ipaddress: any) {
                    app.bridgeIP = ipaddress;
                },
                connectAuto: function (ipaddress: any) {
                    return this.fetchBridgeIP(
                        function (ipaddress: any) {
                            this.setHueBridgeIpAddress(ipaddress);
                            this.connect();
                        });
                },
                connectToIP: function () {
                    this.connect();
                },
                fetchBridgeIP: function (successFun: any, failFun: any) {
                    $.getJSON('https://www.meethue.com/api/nupnp', function (data: any) {
                        if (data[0] && data[0].hasOwnProperty('internalipaddress')) {
                            successFun && successFun(data[0].internalipaddress);
                        }
                        else {
                            failFun && failFun('Could not find ipaddress');
                        }
                    }).fail(failFun);
                },
                checkConnection: function (successFun: any, failFun: any) {
                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: 'http://' +
                        this.getHueBridgeIpAddress() + '/api/' +
                        this.user + '/config',
                        success: successFun,
                        error: function (a, err) { failFun(err) }
                    });
                },
                registerUser: function (userName: any, successFun: any, failFun: any, ipAddress: any) {
                    var data = { "devicetype": "test user", "username": userName }
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        timeout: 3000,
                        url: 'http://' + this.getHueBridgeIpAddress(ipAddress) + '/api/',
                        data: JSON.stringify(data),
                        success: function (data) { successFun(data) },
                        error: function (a, err) { failFun(err) }
                    });
                },
                connect: function (ipaddress: any) {
                    $('#status').html('Connecting...');
                    this.registerUser(
                        app.user,
                        function (json: any) {
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
                        },
                        function () {
                            $('#status').html('Could not find Hue Bridge');
                        }, ipaddress);
                },
                selectLight: function (lightId: any) {
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
                lightSetState: function (lightId: any, state: any) {
                    let ipAddress = '192.168.1.'+this.getHueBridgeIpAddress();
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
                setSixScore3: function (hue: any, state: any, bri: any) {
                    var req2 = {
                        method: 'PUT',
                        url: 'http://192.168.1.102/api/ceb443411ac286f16012a5c25fcc5d7/lights/3/state',

                        data: {
                            "hue": hue,
                            "on": state,
                            "bri": bri
                        }
                    }
                    // $http returns a promise, which has a then function, which also returns a promise
                    var helloPromise3 = $http(req2).then(function (response: any) {
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
            }
        }
    }
}