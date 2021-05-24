"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticlesModule = void 0;
var common_1 = require("@nestjs/common");
var articles_service_1 = require("./articles.service");
var articles_controller_1 = require("./articles.controller");
var services_1 = require("../services");
var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        common_1.Module({
            controllers: [articles_controller_1.ArticlesController],
            providers: [articles_service_1.ArticlesService, services_1.PrismaService]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());
exports.ArticlesModule = ArticlesModule;
