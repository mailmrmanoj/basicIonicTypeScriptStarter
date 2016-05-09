///<reference path="Reference.ts"/>
module AngularAttack.Directives {
    export class demoDirective {
        constructor() {
            return {
                restrict: "E",
                template: '<div class="nopadding col-xs-12 col-sm-4 color-gray record-show">    Showing <label class="record-color-label">{{(paginationSettings.currentPage*paginationSettings.pageSize)-(paginationSettings.pageSize-1)}}-{{(paginationSettings.currentPage*paginationSettings.pageSize)>paginationSettings.totalItems?paginationSettings.totalItems:(paginationSettings.currentPage*paginationSettings.pageSize)}}</label> of <label class="record-color-label">{{paginationSettings.totalItems}}</label> records</div>'
            }
        }
    }
}