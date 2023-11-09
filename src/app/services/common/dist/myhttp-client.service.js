"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RequestHttpParamters = exports.MyhttpClientService = void 0;
var core_1 = require("@angular/core");
var MyhttpClientService = /** @class */ (function () {
    function MyhttpClientService(alertif, minihttpClien, baseUrl) {
        this.alertif = alertif;
        this.minihttpClien = minihttpClien;
        this.baseUrl = baseUrl;
    }
    MyhttpClientService.prototype.Url = function (requestParameters) {
        return (requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl) + "/" + requestParameters.controller + (requestParameters.action ? "/" + requestParameters.action : '');
    };
    MyhttpClientService.prototype.VarsaFullPointYoksaUrl = function (requestParameters) {
        return "" + (requestParameters.FullEndPoin ? requestParameters.FullEndPoin : this.Url(requestParameters));
    };
    MyhttpClientService.prototype.get = function (requestParameters, id) {
        var url = "" + this.VarsaFullPointYoksaUrl(requestParameters) + (id ? "/" + id : '') + (requestParameters.queryString ? "?" + requestParameters.queryString : "");
        return this.minihttpClien.get(url, { headers: requestParameters.httpHeaders });
    };
    MyhttpClientService.prototype.post = function (requestParameters, body) {
        var url = "" + this.VarsaFullPointYoksaUrl(requestParameters) + (requestParameters.queryString ? "?" + requestParameters.queryString : "");
        return this.minihttpClien.post(url, body, { headers: requestParameters.httpHeaders });
    };
    MyhttpClientService.prototype.Put = function (requestParameters, body) {
        var url = "" + this.VarsaFullPointYoksaUrl(requestParameters) + (requestParameters.queryString ? "?" + requestParameters.queryString : "");
        return this.minihttpClien.put(url, body, { headers: requestParameters.httpHeaders });
    };
    MyhttpClientService.prototype["delete"] = function (requestParameters, id) {
        var url = "" + this.VarsaFullPointYoksaUrl(requestParameters) + (id ? "/" + id : '') + (requestParameters.queryString ? "?" + requestParameters.queryString : "");
        return this.minihttpClien["delete"](url, { headers: requestParameters.httpHeaders });
    };
    MyhttpClientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(2, core_1.Inject('temelUrl'))
    ], MyhttpClientService);
    return MyhttpClientService;
}());
exports.MyhttpClientService = MyhttpClientService;
var RequestHttpParamters = /** @class */ (function () {
    function RequestHttpParamters() {
    }
    return RequestHttpParamters;
}());
exports.RequestHttpParamters = RequestHttpParamters;
