"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const UsersDto_1 = require("./Dto/UsersDto");
const user_schema_1 = require("../schemas/user.schema");
const users_payload_1 = require("../Model/users.payload");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async ListUserByID(id) {
        const listUser = await this.userModel.findOne({ _id: id }).exec();
        if (!listUser) {
            throw new common_1.NotFoundException(`User with email id:${id} not found `);
        }
        return listUser;
    }
    async ListUser() {
        const listUsers = await this.userModel.find();
        return listUsers;
    }
    async editUser(id, createUserDto) {
        await this.userModel.updateOne({ _id: id }, createUserDto);
        const updateUser = this.userModel.findById(id);
        return updateUser;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsersDto_1.UsersDTO]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "createUser", null);
__decorate([
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UsersDto_1.UsersDTO]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "editUser", null);
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map