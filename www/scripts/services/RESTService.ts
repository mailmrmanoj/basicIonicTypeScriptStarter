///<reference path="Reference.ts"/>
module AngularAttack.Services {
    export class RESTService {
        static $inject = ["$resource"];
        constructor($resource:any) {
            var Project = $resource('https://api.mongolab.com/api/1/databases' +
                '/angularjs/collections/projects/:id',
                { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
                    update: { method: 'PUT' }
                }
            );
            Project.prototype.update = function (cb:any) {
                return Project.update({ id: this._id.$oid },
                    angular.extend({}, this, { _id: undefined }), cb);
            };

            Project.prototype.destroy = function (cb:any) {
                return Project.remove({ id: this._id.$oid }, cb);
            };
        }
    }
}